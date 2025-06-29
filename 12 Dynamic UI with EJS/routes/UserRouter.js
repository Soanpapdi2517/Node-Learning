//Core Module
const path = require("path");
//Local Module
const RootDir = require("../utils/PathUtils");
//Directory which directing root folder(app.js)

//External Module
const express = require("express");
const { registeredHomes } = require("./HostRouter");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    titleName: "airbnb Home",
  });
});

module.exports = userRouter;
