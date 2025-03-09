// core module
const path = require('path');

// external module
const express = require('express');
// local module
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils")


userRouter.get("/", (req,res,next)=> {
    res.sendFile(path.join(rootDir, '/view/home-airbnb.html'))
})

module.exports = userRouter;