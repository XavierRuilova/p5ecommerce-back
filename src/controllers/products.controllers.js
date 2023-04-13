const ProductsList = require('../models/ProductsModel')
const {v4: uuid} = require('uuid')

const getProducts = async (req, res) =>{
    try{
        const Product = await ProductsList.find({});
        res.json({Product});
    } catch (error) {
        res.status(500).json({
            msg: 'Trouble recovering items',
        })
    }
};

const createProducts = async (req, res) => {
  const { 
    productname, 
    category, 
    brand, 
    description, 
    imgurl, 
    price 
} = req.body;

  try {
    const newProduct = await ProductsList.create({
      productname,
      category,
      brand,
      description,
      imgurl,
      price,
    });
    res.json({ newProduct });
  } catch (error) {
    res.status(500).json({
      msg: "Trouble saving new items",
    });
  }
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { 
    productname, 
    category, 
    brand, 
    description, 
    imgurl, 
    price } = req.body;

  try {
    const updatedProduct = await ProductsList.findByIdAndUpdate(
      id,
      { productname, 
        category, 
        brand, 
        description, 
        imgurl, 
        price },
      { new: true }
    );
    res.json({ updatedProduct });
  } catch (error) {
    res.status(500).json({
      msg: "Trouble updating items",
    });
  }
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await ProductsList.findByIdAndRemove({ _id: id });
    res.json({ deletedProduct });
  } catch (error) {
    res.status(500).json({
      msg: "Trouble removing item",
    });
  }
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
