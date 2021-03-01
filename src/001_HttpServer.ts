const http = require("http");
const math2 = require("./modules/Math2")
http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! '+math2.addNumbers(10,20));
  }).listen(8080);