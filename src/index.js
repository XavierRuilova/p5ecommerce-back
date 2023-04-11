require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users.routes');

app.use(cors());
app.use(express.json());

app.use('/usuario', ()=>{});
app.get('/', (req, res)=>{res.send('API FUNCIONANDO')});



app.listen(process.env.PORT, ()=>{
    console.log(`running on port ${process.env.PORT}`);
});
 