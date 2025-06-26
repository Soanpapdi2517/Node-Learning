//External Module
const express = require("express");
const app = express();
//Local Module
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.get("/add-home", (req, res, next) => {
  res.send(`<h1>Register Your Home here:</h1>
    <form action='/add-home' method='post'>
    <input type='text' name='houseName' placeholder='Enter Your House Name'/>
    <hr>
    <input type='submit' value='Register'/>
    </form>`);
});
app.post("/add-home", (req, res, next) => {
  res.send(`<h1>Home Registered Successfully</h1>
    <a href='/add-home'>Go to Home</a>`);
});
app.get("/", (req, res, next) => {
  res.send(`<h1>Response Recieved</h1>
    <a href='/add-home'>Go to Home</a>`);
});

const PORT = 2004;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
