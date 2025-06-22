const http = require("http");
const fileSystem = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>
      <title>Home</title>
      </head>
      <body>
   <a href="/form-page">Click here to fill form</a>
   </body>
   </html>`);
    return res.end();
  } else if (req.url === "/form-page") {
    res.setHeader("Content-Type", "text/html");

    res.write(`<html>
      <head>
      <title>Form Page</title>
      </head>
      <body>
    <form action="/submit-details" method="post">
        <label for="name">Name: </label>
        <input type="text" id="name" name="Name" placeholder="Enter Your Name">
        <label for="Gender">Gender: </label>
        <label for="male">Male: </label>
        <input type="radio" name="gender" value="male" id="male">
        <label for="female">Female: </label>
        <input type="radio" name="gender" value="female" id="female">
        <input type="submit">
    </form>
    </body>
    </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fileSystem.writeFileSync("user.txt", "Sonu Yadav");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
      <head>
      <title>Error Page</title>
      </head>
      <body>
          <center>
        <h1>Page Not found 404</h1>
    </center>
   </body>
   </html>`);
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
