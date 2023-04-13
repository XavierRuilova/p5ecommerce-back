const express = require("express");
const app = express();
const userRoutes = "./routes/users.routes";
const productRoutes = "./routes/products.routes"; 
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();
connectDB();

// const {products} = require('./models/Products')

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/products", require(productRoutes));
app.use('/users', require(userRoutes))
app.get("/", (req, res) => {
  res.send("RUNNING API");
});

//SERVER
app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});
