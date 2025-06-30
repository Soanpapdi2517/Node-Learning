//Core Module
const path = require("path");

//External Module
const express = require("express");
const HostRouter = express.Router();
//Local Module
const homesController = require("../Controllers/homes");
HostRouter.get("/add-home", homesController.getAddHomePage);

HostRouter.post("/add-home", homesController.postAddHomeSuccessPage);

exports.HostRouter = HostRouter;
