const http = require("http");
const logical = require("./logical");
const requestHandler = require("./user")

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   logical();
// });

const server = http.createServer(requestHandler);

server.listen(3001);
