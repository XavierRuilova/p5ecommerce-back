const express = require('express');
const app = express();
const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/users.routes');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();
connectDB();

// const {products} = require('./models/Products')

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/producto', require(productRoutes))
// app.use('/usuario', require(userRoutes))
app.get('/', (req, res)=>{res.send('RUNNING API')});


//SERVER
app.listen(process.env.PORT, ()=>{
    console.log(`running on port ${process.env.PORT}`);
});
 