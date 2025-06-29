//Core Module
const path = require("path");

//External Module
const express = require("express");
const HostRouter = express.Router();
//Local Module
const RootDir = require("../utils/PathUtils");
HostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(RootDir, "views", "addHome.html"));
});
HostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(RootDir, "views", "successful.html"));
});

module.exports = HostRouter;
