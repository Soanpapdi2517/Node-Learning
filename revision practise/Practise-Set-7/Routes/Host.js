//Core Module
const Path = require("path");

//external Module
const express = require("express");

const hostRouter = express.Router();
//Local Module
const rootDir = require("../Utils/PathUtils");

hostRouter.post("/contact-us", (req, res, next) => {
  res.sendFile(Path.join(rootDir, "views", "Contact-Success.html"));
  console.log(req.body);
});

hostRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(Path.join(rootDir, "views", "contact-us.html"));
});

module.exports = hostRouter;
