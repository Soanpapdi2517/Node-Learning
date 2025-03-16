//core module
const path = require("path");
//external module
const express = require("express");
// local module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "Add-Home" });
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log(`Home successfully registerd: ${req.body}`);
  registeredHomes.push({ HouseName: req.body.home });
  res.render("Home-added", { pageTitle: "Home successFully Added" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
