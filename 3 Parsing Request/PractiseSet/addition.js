const additionPage = (req,res)=>{
    const additionBody = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      additionBody.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(additionBody).toString();
      const params = new URLSearchParams(fullBody);
      const mainAddition = Object.fromEntries(params);
      console.log(mainAddition);
      res.setHeader("Content-type", "text/html");
      res.write(`
        <html>
  <html>
    <head>
      <title>Result Page</title>
    </head>
    <body>
        <h1>Sum is: ${
          Number(mainAddition.number1) + Number(mainAddition.number2)
        }</h1>
    </body>
  </html>
</html>

        `);
      return res.end();
    });
}

module.exports = additionPage;