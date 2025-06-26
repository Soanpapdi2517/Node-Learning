//External Module
const express = require("express");
const HostRouter = express.Router();

HostRouter.get("/add-home", (req, res, next) => {
  res.send(`<h1>Register Your Home here:</h1>
    <form action='/host/add-home' method='post'>
    <input type='text' name='houseName' placeholder='Enter Your House Name'/>
    <hr>
    <input type='submit' value='Register'/>
    </form>`);
});
HostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`<h1>Home Registered Successfully</h1>
    <h2>Home available</h2>
    <h3>${req.body.houseName}</h3>
    <a href='/host/add-home'>Go to Home</a>`);
});

module.exports = HostRouter;
