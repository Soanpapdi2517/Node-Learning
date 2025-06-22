const filesystem = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      filesystem.writeFileSync("revision.txt", JSON.stringify(bodyObject)); 
    });
    // filesystem.writeFileSync("revision.txt", JSON.stringify(bodyObject)); 
    // // bodyobject is not here and writefilesync call should syncronously
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
    `
      <input type="text" name="username" placeholder="Enter Your Username here"><br>
   `
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
};

module.exports = userRequestHandler;
