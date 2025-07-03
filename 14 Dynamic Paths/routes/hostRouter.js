// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);
hostRouter.get("/edit-home/:edithomeId", hostController.getEditHome);
hostRouter.post("/edit-home", hostController.postEditHome);
hostRouter.post("/delete-home/:deleteHomeId", hostController.postDeleteHome);

module.exports = hostRouter;
