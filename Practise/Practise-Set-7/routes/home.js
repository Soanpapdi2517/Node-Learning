//core module
const path = require('path')
//external module
const express = require('express');
//local module
const rootDir = require('../utils/pathUtils')

const homeRoute = express.Router();

homeRoute.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, '/views/home.html'))
  });

module.exports = homeRoute;