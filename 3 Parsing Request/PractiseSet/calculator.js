const additionPage = require("./addition");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`
            <html>
            <head>
            <title>Home Page</title>
            </head>
            <body>
            <a href="/calculator">click for calculator</a>
            </body>
            </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-type", "text/html");
    res.write(`
            <html>
  <html>
    <head>
      <title>Calculator Page</title>
    </head>
    <body>
      <form action="/calculator-result" method="post">
        <label for="firstNum">First number</label>
        <input type="number" name="number1" id="firstNum" />
        <label for="SecondNum">Second number</label>
        <input type="number" name="number2" id="SecondNum" />
        <input type="submit" value="Sum"/>
      </form>
    </body>
  </html>
</html>
            `);
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return additionPage(req, res);
  }
  res.setHeader("Content-type", "text/html");
  res.write(`<html>
<head>

    <title>ERROR PAGE</title>
</head>
<body>
<h1>404 No Page found</h1>
</body>
</html>`);
};

module.exports = requestHandler;
