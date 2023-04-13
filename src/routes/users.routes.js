const {Router} = require('express');
const { 
    getUsuario, 
    createUsuario, 
    updateUsuario, 
    loginUser, 
    verifyUser 
} = require('../controllers/users.controllers')

const router = Router();

router.get('/load', getUsuario)
router.post('/signup', createUsuario )
router.put('/update', updateUsuario )
router.post('/login', loginUser )
router.post('/verify', verifyUser )

module.exports = router