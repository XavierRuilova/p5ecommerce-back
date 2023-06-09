const UsersList = require('../models/UsersModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
	try {
		const usersCall = await UsersList.find({})
		res.json({ usersCall })
	} catch (error) {
		res.status(500).json({ msg: 'There is a problem recovering users' })
	}
}

const createUser = async (req, res) => {
	const { 
		username, 
		firstname, 
		lastname, 
		email, 
		password 
	} = req.body
	const salt = await bcryptjs.genSalt(10)
	const hashedPassword = await bcryptjs.hash(password, salt)

	try {
		const newUser = await UsersList.create({
			username,
			firstname,
			lastname,
			email,
			password: hashedPassword,
		})

		const payload = {
			user: {
				id: newUser._id,
			},
		}

		jwt.sign(
			payload,
			process.env.SECRET, // LLAVE PARA DESCIFRAR LA FIRMA ELECTRÓNICA DEL TOKEN,
			{
				expiresIn: 360000, // EXPIRACIÓN DEL TOKEN
			},
			(error, token) => {
				if (error) throw error
				//res.json(newUser)
				res.json({ token })
			}
		)
	} catch (error) {
		return res.status(400).json({
			msg: error,
		})
	}
}

const findUser = async (req, res) =>{
	const {id} = req.body
	try {
		const gotUser = await UsersList.findById({_id:id})
		res.json({ gotUser })
	 } catch (error) {
		res.json({ msg: 'Usuario no encontrado', error })
	}
}

// INICIAR SESIÓN
const loginUser = async (req, res) => {
	const { email, password } = req.body
	try {
		let foundUser = await UsersList.findOne({ email: email }) // ENCONTRAMOS UN USUARIO
		if (!foundUser) {
			return res.status(400).json({ msg: 'El usuario no existe' })
		}
		const passGranted = await bcryptjs.compare(password, foundUser.password)
		if (!passGranted) {
			return await res.status(400).json({ msg: 'Datos de sesión incorrectos' })
		}

		const payload = {
			user: {
				id: foundUser.id,
			},
		}
		if (email && passGranted) {
			jwt.sign(
				payload, process.env.SECRET, 
				{ expiresIn: 3600000 }, 
				(error, token) => {
				if (error) throw error
				//SI TODO SUCEDIÓ CORRECTAMENTE, RETORNAR EL TOKEN
				res.json({ token })
			})
		} else {
			res.json({ msg: 'Hubo un error', error })
		}
	} catch (error) {
		res.json({ msg: 'Hubo un error', error })
	}
}

const verifyUser = async (req, res) => {
	try {
		// CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
		const verifiedUser = await UsersList.findById(req.user.id).select('-password')
		res.json({ verifiedUser })
	} catch (error) {
		// EN CASO DE ERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
		res.status(500).json({
			msg: 'Hubo un error',
			error,
		})
	}
}

const updateUser = async (req, res) => {
	const { 
		username, 
		firstname, 
		lastname, 
		email } = req.body
	try {
		const updatedUser = await UsersList.findByIdAndUpdate(
			req.params.id, 
			{ 
				username, 
				firstname, 
				lastname, 
				email 
			}, 
				{ new: true })
		res.json(updatedUser)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error actualizando la Usuario',
		})
	}
}

const deleteUser = async (req, res) => {
	try {
		const userDeleted = await UsersList.findByIdAndRemove({_id:req.params.id})
		res.json(userDeleted)
	} catch(error){
		res.status(500).json({
			msg: 'Trouble deleting user'
		})
	}
}
module.exports = { getUser, createUser, updateUser, loginUser, verifyUser, deleteUser, findUser }
