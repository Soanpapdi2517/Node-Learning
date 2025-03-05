const http = require("http");
const express = require('express');

const app = express();
app.use(("/"),(req, res, next)=> {
  console.log("i'm in first middleware");
  next();
})
app.use(("/"),(req, res, next)=> {
  console.log("i'm in another middleware");
  res.send("<p>This is my / of Another Express program</p>");
})
app.use(("/home"),(req, res, next)=> {
  console.log("i'm in second middleware");
  res.send("<p>This is my Home of first Express program</p>")
})
const server = http.createServer(app);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
