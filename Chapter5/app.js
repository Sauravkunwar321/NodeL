const http = require('http');
const requestHandler = require('./user')


const server = http.createServer(requestHandler);

server.listen(3000);
