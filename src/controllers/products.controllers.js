const Products = require('../models/Products')
const {v4: uuid} = require('uuid')
const getProducts = async (req, res) =>{
    try{
        const Product = await Products.find({});
        res.json({Product});
    } catch (error) {
        res.status(500).json({
            msg: 'Trouble recovering items',
        })
    }
};

const createProducts = async (req, res) =>{
    const {productname, category, brand, description, imgurl, price} = req.body

    try{
        const newProduct = await Products.create({productname, category, brand, description, imgurl, price});
        res.json({newProduct});
    } catch (error) {
        res.status(500).json({
            msg: 'Trouble saving new items',
        })
    }
};

const updateProducts = async (req, res) =>{
    const {id, productname, category, brand, description, imgurl, price} = req.body

    try{
        const updateProduct = await Products.findByIdAndUpdate(id, {productname, category, brand, description, imgurl, price}, {new: true});
        res.json({updateProduct});
    } catch (error) {
        res.status(500).json({
            msg: 'Trouble updating items',
        })
    }
};

const deleteProducts = async (req, res) =>{
    const {id} = req.body

    try{
        const deleteProduct = await Products.findByIdAndRemove({_id: id});
        res.json({deleteProduct});
    } catch (error) {
        res.status(500).json({
            msg: 'Trouble removing item',
        })
    }
};

module.exports = {getProducts, createProducts, updateProducts, deleteProducts}