//Core Module
const path = require("path");

//External Module
const express = require("express");
const HostRouter = express.Router();
//Local Module

const registeredHomes = [];
HostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { titleName: "Add Home here" ,
    currentPage: "addHome"});
});
HostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push({ houseName: req.body.houseName, price: req.body.Price, location: req.body.Location, rating: req.body.rating, img: req.body.Image });
  console.log(req.body);
  res.render("successful", { titleName: "Added Successfully"});
});

exports.HostRouter = HostRouter;
exports.registeredHomes = registeredHomes;
