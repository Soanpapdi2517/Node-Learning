const sumHandler = (req,res) => {

    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObj = Object.fromEntries(params);
      const sum = Number(bodyObj.Operand_1) + Number(bodyObj.Operand_2);
      res.write(`
        <html lang="en">
         <head>
         <title>Calculator</title>
         </head>
         <body>
         <h1>Here is your Sum: ${sum}</h1>
         </body>
         </html> 
         `);
      return res.end();
    });
}

exports.sumHandler = sumHandler;