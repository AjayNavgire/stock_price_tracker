const express = require("express");
const app = express();


// Route Imports
const stock = require("./routes/stockRoute");

app.use(express.json())

app.use("/api/stock",stock);


module.exports = app;