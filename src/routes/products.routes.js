const { Router } = require("express");
const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  findProducts
} = require("../controllers/products.controllers");

const router = Router();

router.get('/load', getProducts)
router.get('/find/:id', findProducts)
router.post('/upload', createProducts)
router.put('/update/:id', updateProducts)
router.delete('/delete/:id', deleteProducts)

module.exports = router;