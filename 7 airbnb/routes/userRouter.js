// core module
const path = require('path');

// external module
const express = require('express');
// local module
const userRouter = express.Router();

userRouter.get("/", (req,res,next)=> {
    res.sendFile(path.join(__dirname, '../view/home-airbnb.html'))
})

module.exports = userRouter;