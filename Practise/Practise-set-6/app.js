const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(req.path);
  next();
});
app.use((req, res, next) => {
  console.log(req.method);
  next();
});
// app.use((req,res,next)=> {
//     res.send("<center><h1>Welcome to Home and contact us page for my Practise Set 6</h1></center>")
//     next(); ❌ when res.send() we use we don't need to use next
// })

app.get("/", (req, res, next) => {
  res.send(
    `<center><h1>Welcome to Home and contact us page for my Practise Set 6</h1>
    <br>
    <br>
    <a href="/contact-us">Contact Us</a>
    </center>`
  );
});
app.get("/contact-us", (req, res, next) => {
  res.send(`
     <center>
     <form action="/contact-us" method="POST">
     <label for="name">Name:</label>
     <input type="text" id="name" name="Name" placeholder="Enter Your Name">
     <br>
    <label for="email">email:</label>
     <input type="email" id="email" name="Name" placeholder="Enter Your E-mail">
     <br>
     <input type="submit">
     </form>
     </center>
     `);
});
app.post("/contact-us", (req,res,next)=> {
    res.send(`<center><h1>Thanks for Your Details</h1></center>`)
})

app.listen(PORT, () => {
  console.log(`Server Running on 🚀 http://localhost:${PORT}`);
});
