const express= require('express')
const bodyparser=require('body-parser')
const {orderModel}=require("../models/Order")
const orderRouter=express.Router();
orderRouter.use(bodyparser.json())



module.exports = orderRouter;