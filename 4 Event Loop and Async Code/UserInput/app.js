const http = require("http");
const RequestHandler = require("./post");
const server = http.createServer(RequestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
