const path = require('path')

const express = require('express');
const contactRouter = express.Router();
const rootDir = require("../utils/pathUtil")

contactRouter.get("/contact-us", (req, res, next) => {
  // console.log("handling / for get");
  res.sendFile(path.join(rootDir, "views", "contact.html"))
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body)
  res.sendFile(path.join(rootDir, "views", "contactadded.html"))
});

module.exports = contactRouter