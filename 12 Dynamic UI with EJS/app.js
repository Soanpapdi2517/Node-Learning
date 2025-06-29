//Core Module
const path = require("path");

//External Module
const express = require("express");
const app = express();
//Local Module
const RootDir = require("./utils/PathUtils"); //Directory which directing root folder(app.js)

const userRouter = require("./routes/UserRouter");
const HostRouter = require("./routes/HostRouter");

//Granting files to public Folder and making it
//Publicly accessible
app.use(express.static(path.join(RootDir, "public")));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", HostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(RootDir, "views", "404ErrorPage.html"));
});
const PORT = 2004;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
