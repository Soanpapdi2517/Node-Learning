//Core Module
const path = require("path");

//External Module
const express = require("express");
const HostRouter = express.Router();
//Local Module
const RootDir = require("../utils/PathUtils");

const registeredHomes = [];
HostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(RootDir, "views", "addHome.ejs"));
});
HostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(RootDir, "views", "successful.ejs"));
});

exports.HostRouter = HostRouter;
exports.registeredHomes = registeredHomes;
