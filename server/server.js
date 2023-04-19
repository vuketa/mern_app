require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

//EXPRESS APP
const app = express();

//MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/products", productRoutes);
// CONNECT to DB
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://vuketa:lozinka%40mongodb@mernapp.mnbctnh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected to DB & Server started on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
