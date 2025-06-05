const http = require("http");
const requestserver = require("./app2.js");

const server = http.createServer(requestserver);

server.listen(3000);
