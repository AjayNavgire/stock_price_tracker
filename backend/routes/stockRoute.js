const express = require("express");
const {registerStock, getAllStock}=require("../controller/stockController")
const router = express.Router();


router.route("/register").post(registerStock);
router.route("/list").get(getAllStock);


module.exports = router;