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

router.get('/load', getUser)
router.post('/signup', createUser )
router.post('/login', loginUser )
router.post('/verify', verifyUser )
router.put('/update/:id', updateUser )
router.delete('/cancel/:id', deleteUser)

module.exports = router