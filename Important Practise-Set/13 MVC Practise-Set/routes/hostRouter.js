//Core Module
const path = require("path");

//External Module
const express = require("express");
const HostRouter = express.Router();
//Local Module
const hostController = require("../Controllers/hostController");
HostRouter.get("/add-home", hostController.getAddHomePage);

HostRouter.post("/add-home", hostController.postAddHomeSuccessPage);
HostRouter.get("/host-home-list", hostController.getHostHomeList);
module.exports = HostRouter;
