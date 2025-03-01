const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);
  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head> <title>Node Course Home Page</title>  </head>");
    response.write(
      "<body> <h1> this page goes to home page which shows only on when url is / </h1> </body>"
    );

    response.write("</html>");
    return  response.end();
  }
  if (request.url === "/about") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head> <title>Node Course About Page</title>  </head>");
    response.write(
      "<body> <h1> this page goes to about page which shows only on when url is /about <hr/> My name is sonu yadav who is learning this as of now </h1> </body>"
    );
    response.write("</html>");
    return response.end();
  }
  if (request.url === "/contact") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head> <title>Node Course contact Page</title>  </head>");
    response.write(
      "<body> <h1> this page goes to contact page which shows only on when url is /contact <hr/> contact no. 8586856310 </h1> </body>"
    );
    response.write("</html>");
    return response.end();
  }

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head> <title>Node Course Learning</title>  </head>");
  response.write(
    "<body><h1>This is video of Response and Request and currently i'm learning response when you want to close or exit from any server you can use process.exit<h1/></body>"
  );
  response.write("</html>");
 return response.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
