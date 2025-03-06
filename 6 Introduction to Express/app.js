// core middleware


//external middleware
const express = require('express');
// local middleware
const userRequestHandler = require('./post');

const app = express();
app.get(("/"),(req, res, next)=> {
  console.log("i'm in first middleware", req.url, req.method);
  res.send("<h1>Express</h1>");
})
app.use(("/submit-details"),(req, res, next)=> {
  console.log("i'm in second middleware");
  res.send("<p>This is my Home of first Express program</p>")
})
app.use(("/"),(req, res, next)=> {
  console.log("i'm in another middleware", req.url, req.method);
  res.send("<p>This is my / of Another Express program</p>");
})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
