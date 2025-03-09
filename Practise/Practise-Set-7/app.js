const path = require('path')
const express = require("express");
const app = express();
const homeRouter = require('./routes/home');
const ContactRouter = require('./routes/contact-us');
const rootDir = require('./utils/pathUtils')
app.use(express.urlencoded());

// app.use((req, res, next) => {
//   console.log(req.path);
//   next();
// });
// app.use((req, res, next) => {
//   console.log(req.method);
//   next();
// });
// app.use((req,res,next)=> {
//     res.send("<center><h1>Welcome to Home and contact us page for my Practise Set 6</h1></center>")
//     next(); ❌ when res.send() we use we don't need to use next
// })
app.use(homeRouter);
app.use(ContactRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir, '/views/404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running on 🚀 http://localhost:${PORT}`);
});
