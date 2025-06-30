
//External Module
const express = require("express");
const userRouter = express.Router();

//local Module
const homesController= require('../Controller/homes')
userRouter.get("/", homesController.getHomePage);

module.exports = userRouter;
