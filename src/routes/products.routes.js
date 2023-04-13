const {Router} = require('express');
const {getProducts, createProducts, updateProducts, deleteProducts} = require('../controllers/products.controllers')
const router = Router();

router.get('/obtener', getProducts)
router.post('/crear', createProducts)
router.put('/actualizar/:id', updateProducts)
router.delete('/borrar/:id', deleteProducts)

module.exports = router