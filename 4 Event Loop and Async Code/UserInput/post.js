const { error } = require("console");
const filesystem = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      // const bodyObj = {}
      // for(const [key, value] of params.entries()){
      //   bodyObj[key] = value;
      // }
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      // BLOCKING EVERYTHING
      // filesystem.writeFileSync("userfile.txt", JSON.stringify(bodyObj));

      // Fixing BLOCKING CODE
      filesystem.writeFile("Test.txt", JSON.stringify(bodyObj), (error) => {
        console.log("File Successfully written");
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
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
  }
};

module.exports = userRequestHandler;
