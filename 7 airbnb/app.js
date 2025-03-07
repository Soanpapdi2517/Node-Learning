//core module
const path = require("path");

// external module
const express = require("express");
// local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/view/404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started 🚀 on http://localhost:${PORT}`);
});
