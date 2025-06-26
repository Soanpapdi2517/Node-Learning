//external module
const express = require("express");
//local module
const app = express();
//adding middleware
app.get("/path", (req, res, next) => {
  console.log("Entering second middleware", req.method, req.url);
  res.setHeader("Content-Type", "text/html");
  res.send(`<h1>First response which i sent using express</h1>`);
});
app.use("/", (req, res, next) => {
  console.log("Entering first middleware", req.method, req.url);
  res.send(`<h1>second response which i sent using express</h1>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
