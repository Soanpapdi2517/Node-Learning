const sumHandler = (req,res) => {
  console.log("1. In Sum Handler", req.url)
    const body = [];
    let sum;
    req.on("data", (chunks) => {
      body.push(chunks);
      console.log("2. Chunk came")
    });
    req.on("end", () => {
      console.log("3. request ended")
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObj = Object.fromEntries(params);
      sum = Number(bodyObj.Operand_1) + Number(bodyObj.Operand_2);
      
    });
    console.log("4. Sending the Response")
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
}

exports.sumHandler = sumHandler;