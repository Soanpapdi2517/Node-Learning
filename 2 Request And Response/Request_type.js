const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head> <title>Node Course Learning</title>  </head>");
    response.write("<body><h1>This is video of Response and Request and currently i'm learning response when you want to close or exit from any server you can use process.exit<h1/></body>")
    response.write("</html>");
    response.end();
});

const PORT = 3001;

server.listen(PORT, ()=> {
    console.log(`Server Started on http://localhost:${PORT}`)
})