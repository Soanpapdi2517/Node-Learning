const path = require("path");
const express = require("express");
const ContactRoute = express.Router();
const rootDir = require("../utils/pathUtils");

ContactRoute.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootDir, '/views/contact-us.html'))

});
ContactRoute.post("/contact-us", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, '/views/success-contact.html'))
});

module.exports = ContactRoute;
