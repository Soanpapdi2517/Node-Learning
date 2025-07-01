//Core Module
const path = require("path");

//External Module
const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.set("views", "File_place_where_it_is_gonna_use"); default is views
app.set("views", "views");

//Local Module
const RootDir = require("./utils/PathUtils"); //Directory which directing root folder(app.js)
const userRouter = require("./routes/UserRouter");
const HostRouter  = require("./routes/HostRouter");
const ErrorController = require("./Controllers/error");
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

app.use(ErrorController.get404);
const PORT = 2004;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
