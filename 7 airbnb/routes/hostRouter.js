//core module
const path = require("path");
//external module
const express = require("express");
// local module
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../view/add-home.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../view/Home-added.html"));
});

module.exports = hostRouter;
