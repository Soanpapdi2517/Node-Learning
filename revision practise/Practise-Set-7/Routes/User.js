//Core Module
const Path = require('path');

//external Module
const express = require("express");

//Local Module
const rootDir = require("../Utils/PathUtils")

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(Path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;