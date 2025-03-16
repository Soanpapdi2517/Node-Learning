//core module
const path = require("path");
// external module
const express = require("express");

// local module
const userRouter = require("./routes/userRouter");
const { registeredHomes, hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const app = express();
app.set("view engine", "ejs");
app.set("views", "view");
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.static(path.join(rootDir, "./public")));
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started 🚀 on http://localhost:${PORT}`);
});
