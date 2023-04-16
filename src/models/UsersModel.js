const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        }, 
        name: {
            type: String,
            required: true,
        }, 
        lastname: {
            type: String,
            required: true,
        }, 
        email: {
            type: String,
            lowercase: true,
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

const User = mongoose.model('User', userSchema);

module.exports = User