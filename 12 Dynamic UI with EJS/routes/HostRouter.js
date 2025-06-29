//Core Module
const path = require("path");

//External Module
const express = require("express");
const HostRouter = express.Router();
//Local Module
const RootDir = require("../utils/PathUtils");

const registeredHomes = [];
HostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { titleName: "Add Home here" });
});
HostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("successful", { titleName: "Added Successfully" });
});

exports.HostRouter = HostRouter;
exports.registeredHomes = registeredHomes;
