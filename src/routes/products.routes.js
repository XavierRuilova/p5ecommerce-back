const { Router } = require("express");
const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/products.controllers");
const router = Router();

<<<<<<< HEAD
router.get('/obtener', getProducts)
router.post('/crear', createProducts)
router.put('/actualizar/:id', updateProducts)
router.delete('/borrar/:id', deleteProducts)
=======
router.get("/obtener", getProducts);
router.post("/crear", createProducts);
router.put("/actualizar/:id", updateProducts);
router.delete("/borrar/:id", deleteProducts);
>>>>>>> 81ea3de68f16b139793e27b36fb346359930112b

module.exports = router;
