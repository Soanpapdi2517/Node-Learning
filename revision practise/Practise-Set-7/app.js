//Core Module
const Path = require("path");
//External module
const express = require("express");
//Local Module
const rootDir = require("./Utils/PathUtils");
const userRouter = require("./Routes/User");
const hostRouter = require("./Routes/Host");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
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

app.use((req, res, next) => {
  res.sendFile(Path.join(rootDir, "views", "404.html"));
});

const PORT = 2004;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
