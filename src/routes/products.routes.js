const { Router } = require("express");
const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/products.controllers");

const router = Router();

router.get('/load', getProducts)
router.post('/upload', createProducts)
router.put('/update/:id', updateProducts)
router.delete('/delete/:id', deleteProducts)

module.exports = router;