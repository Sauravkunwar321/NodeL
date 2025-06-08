const path = require("path");

const express = require("express");
const homeRouter = express.Router();

const rootDir = require("../utils/pathUtil");

homeRouter.get("/", (req, res, next) => {
  console.log("handling / for get");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
