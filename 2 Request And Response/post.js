const http = require("http");
const fileSystem = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    fileSystem.writeFileSync("user-details.txt", "Sonu Yadav");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Details of User page</title></head>");
  res.write("<body><h1>Welcome to enter your details</h1></body>");
  res.write('<form action="/submit-details" method="POST">');
  res.write(
    `<input type="text" name="username" placeholder="Enter Your Username here"><br>`
  );

  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label for="female">Female</label>');
  res.write(
    '<input type="radio" id="female" name="gender" value="female"><br><br>'
  );
  res.write('<input type="submit" value="submit">');
  res.write("</form>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});
