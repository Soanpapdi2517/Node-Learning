const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  process.exit();
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
