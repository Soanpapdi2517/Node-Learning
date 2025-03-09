const path = require('path')
const express = require('express');
const homeRoute = express.Router();
const rootDir = require('../utils/pathUtils')

homeRoute.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, '/views/home.html'))
  });

module.exports = homeRoute;