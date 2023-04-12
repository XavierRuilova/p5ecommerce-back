const {Router} = require('express');
const {getProducts, createProducts, updateProducts, deleteProducts} = require('../controllers/products.controllers')
const router = Router();

router.get('/obtener', getProducts)
router.post('/crear', createProducts)
router.put('/actualizar', updateProducts)
router.delete('/borrar', deleteProducts)

module.exports = router