const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        }, 
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
        
    },
    {
        timestamps: true,
    }
);

const Usuario = mongoose.model('Usuario', userSchema);

module.exports = Usuario