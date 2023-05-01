const {Router} = require('express');
const auth = require('../middlewares/authorization')
const { 
    getUser, 
    createUser, 
    updateUser, 
    loginUser, 
    verifyUser, 
    deleteUser,
    findUser
} = require('../controllers/users.controllers')

const router = Router();

router.get('/load', auth, getUser)
router.post('/signup', createUser )
router.post('/login', loginUser )
router.get('/verify', auth,  verifyUser )
router.post('/find', auth,  findUser )
router.put('/update/:id', auth, updateUser )
router.delete('/cancel/:id', auth, deleteUser)

module.exports = router