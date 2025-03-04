const http = require("http");
const server = http.createServer((req, res)=> {
    console.log(req);
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>NPM and TOOLS</title></head> <body>Learning npm and tools</body></html>")
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
