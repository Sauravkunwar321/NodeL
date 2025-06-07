//core modules
const http = require("http");

//external modules

const express = require("express");

//local module
const requestHandler = require("./user");

const app = express();

const server = http.createServer(app);

server.listen(3001);
