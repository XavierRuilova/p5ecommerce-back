const {Router} = require('express');
const auth = require('../middlewares/authorization')
const { 
    getUser, 
    createUser, 
    updateUser, 
    loginUser, 
    verifyUser, 
    deleteUser
} = require('../controllers/users.controllers')

const router = Router();

router.get('/load', auth, getUser)
router.post('/signup', createUser )
router.post('/login', loginUser )
router.get('/verify', auth,  verifyUser )
router.put('/update/:id', auth, updateUser )
router.delete('/cancel/:id', auth, deleteUser)

module.exports = router