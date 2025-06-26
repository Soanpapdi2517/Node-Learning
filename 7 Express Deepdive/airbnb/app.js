//External Module
const express = require("express");
const app = express();
//Local Module
const userRouter = require("./routes/UserRouter");
const HostRouter = require("./routes/HostRouter");
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", HostRouter);

app.use((req, res, next) => {
  res.status(404).send(`
    <h1>404 the page your are looking for</h1>
    <h2>is not found</h2>
    `);
});
const PORT = 2004;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
