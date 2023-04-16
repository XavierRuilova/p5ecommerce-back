const express = require("express");
const app = express();
const userRoutes = require("./routes/users.routes");
const productRoutes = require("./routes/products.routes"); 
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();
connectDB();

// const {products} = require('./models/Products')

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/products", productRoutes);
app.use('/users', userRoutes)
app.get("/", (req, res) => {
  res.send("ECOMMERCE API");
});

//SERVER
app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
