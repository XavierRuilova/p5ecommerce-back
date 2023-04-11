const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productname: {
            type: String,
            required: true,
        }, 
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
        },
        description: {
            type: String,
            required: true,

        },
        imgurl: {
            type: String,
            required: true,

        },
        price: {
            type: Number,
            required: true,

        },

        
    },
    {
        timestamps: true,
    }
);

const Producto = mongoose.model('Producto', productSchema);

module.exports = Producto;