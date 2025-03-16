// core module
// external module
const express = require("express");
// local module
const userRouter = express.Router();
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home-airbnb", {
    registeredHomes: registeredHomes,
    pageTitle: "Airbnb-Home",
  });
});

module.exports = userRouter;
