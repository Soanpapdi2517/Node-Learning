const express = require("express");

const app = express();
const fs = require("fs");

// app.use("/", (req, res, next) => {
//   console.log(`Request method is: ${req.method}`);
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log(`Request path is: ${req.url}`);
//   next();
// });

// app.use("/", (req, res, next) => {
//   res.send('<h1>This is returning response question in practise set</h1>')
// });

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <html>
<head>
    <title>Contact-us page</title>
</head>
<body>
    <h3>Contact us by providing details below</h1>
        <form action="/contact-us" method="post">
            <label for="name">Enter Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name">
            <label for="email">Enter Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email">
            <input type="submit" value="Register">
        </form>
</body>
</html>`);
});
app.use(express.urlencoded());
app.post("/contact-us", (req, res, next) => {
  console.log(req.body, req.method, req.url);
  res.send(`
    <html>
<head>
    <title>Contact-us success</title>
</head>
<body>
    <h3>Thank You for providing details</h1>
</body>
</html>`);
});
app.use("/", (req, res, next) => {
  res.send(`<html>
  <head>
    <title>home page</title>
  </head>
  <body>
    <h1>This is home page press button below to go for contact us page</h1>
    <a href="/contact-us">Contact us</a>
  </body>
</html>
`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
