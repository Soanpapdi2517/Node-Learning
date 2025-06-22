const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers);
  if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
<html>
<head>
    <title>Men</title>
</head>
<body>
    <h1>welcome To Men Section</h1>
</body>
</html>`);
    return res.end();
  }
  if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
<html>
<head>
    <title>Women</title>
</head>
<body>
    <h1>welcome To Women Section</h1>
</body>
</html>`);
    return res.end();
  }
  if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
<html>
<head>
    <title>Kids</title>
</head>
<body>
    <h1>welcome To Kids Section</h1>
</body>
</html>`);
    return res.end();
  }
  if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
<html>
<head>
    <title>Cart</title>
</head>
<body>
    <h1>welcome To Cart Section</h1>
</body>
</html>`);
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
<html>
<head>
    <title>Practise Exercise set 2</title>
</head>
<body>
    <h1>Home</h1>
    <a href="/men">Men</a>
    <hr>
    <a href="/women">Women</a>
    <a href="/kids">Kids</a>
    <a href="/cart">Cart</a>
    <a href="/">Home</a>
</body>
</html>`);
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Started http://localhost:${PORT}`);
});
