const http = require("http");
const userRequestHandler = require('./post')
const server = http.createServer(userRequestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
