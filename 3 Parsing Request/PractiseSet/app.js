const http = require("http");
const requestHandler = require("./calculator");
const server = http.createServer(requestHandler);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});