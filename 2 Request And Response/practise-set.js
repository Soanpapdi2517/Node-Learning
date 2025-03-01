const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Men</title></head>");
    res.write(`<body><h1>Welcome to Men section</h1></body>`);
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Women</title></head>");
    res.write(`<body><h1>Welcome to Women section</h1></body>`);
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Kids</title></head>");
    res.write(`<body><h1>Welcome to Kids section</h1></body>`);
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Cart</title></head>");
    res.write(`<body><h1>Welcome to Cart section</h1></body>`);
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Practise Exercise</title></head>");
  res.write(`<body>
    <h1>Home</h1>
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/kids">Kids</a>
    <a href="/cart">Cart</a>
    </body>`);
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});
