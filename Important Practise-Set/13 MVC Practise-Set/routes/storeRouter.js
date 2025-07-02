//External Module
const express = require("express");
const StoreRouter = express.Router();

//local Module
const storeController = require("../Controllers/storeController");
StoreRouter.get("/", storeController.getMainPage);
StoreRouter.get("/homelist", storeController.getHomeList);
StoreRouter.get("/wishlist", storeController.getWishlist);
StoreRouter.get("/reservations", storeController.getReservations);
StoreRouter.get("/trips", storeController.getTrips);

module.exports = StoreRouter;
