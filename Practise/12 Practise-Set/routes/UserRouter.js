
//External Module
const express = require("express");
const { registeredHomes } = require("./HostRouter");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {

  res.render("home", {
    registeredHomes: registeredHomes,
    titleName: "airbnb Home",
    currentPage: "home"
  });
});

module.exports = userRouter;
