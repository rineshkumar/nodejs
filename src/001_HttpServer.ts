import * as http from 'http'

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" })
  .end("hello World 123");
}).listen(8080);