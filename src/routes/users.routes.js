const {Router} = require('express');
const { 
    getUser, 
    createUser, 
    updateUser, 
    loginUser, 
    verifyUser
} = require('../controllers/users.controllers')

const router = Router();

router.get('/load', getUser)
router.post('/signup', createUser )
router.put('/update/', updateUser )
router.post('/login', loginUser )
router.post('/verify', verifyUser )

module.exports = router