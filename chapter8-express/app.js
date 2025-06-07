//core modules
const http = require("http");

//external modules

const express = require("express");

//local module
const requestHandler = require("./user");

const app = express();

app.use("/", (req, res, next) => {
  console.log("First middleware", req.url, req.method);
  // res.send("<h1>Hello 1</h1>");
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("second middleware", req.url, req.method);
  res.send("<p>Welcome</p>");
});

// const server = http.createServer(app);

app.listen(3000);
