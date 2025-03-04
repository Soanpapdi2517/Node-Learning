const { sumHandler } = require("./SumHandler");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/calculator") {
    res.write(`
    <html lang="en">
    <head>
    <title>Calculator</title>
    </head>
    <body>
    <form action="/calculate-result" method="POST">
    <label for="input1">Input1: </label>
    <input type="text" name="Operand_1" placeholder="Enter your first operand" id="input1">
    <button type="submit">Sum</button>
    <label for="input2">Input2:</label>
    <input type="text" name="Operand_2" placeholder="Enter your first operand" id="input2">
    </form>
    </body>
    </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumHandler(req, res);
  } else if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang="en">
        <head>
        <title>Calculator</title>
        </head>
        <body>
        <h1>Welcome to Calculator</h1>
        <a href="/calculator">Calculator</a>
        </body>
        </html>`);
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
        <html lang="en">
        <head>
        <title>Calculator</title>
        </head>
        <body>
        <center><h1>404 Error Page does not exist</h1></center>
        </body>
        </html>`);
  res.end();
};

exports.requestHandler = requestHandler;
