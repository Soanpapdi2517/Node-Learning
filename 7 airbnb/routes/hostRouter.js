//core module
const path = require("path");
//external module
const express = require("express");
// local module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils")


hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "/view/add-home.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "/view/Home-added.html"));
});

module.exports = hostRouter;
