const http = require('http');
const routes = require('./route');
console.log(routes.myText);
const server = http.createServer(routes.handler)

server.listen(3000);