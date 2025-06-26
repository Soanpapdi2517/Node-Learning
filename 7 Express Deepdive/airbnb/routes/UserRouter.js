//External Module
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send(`<h1>Response Recieved</h1>
    <a href='/host/add-home'>Go to Home</a>`);
});

module.exports = userRouter;