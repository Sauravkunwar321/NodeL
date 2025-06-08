//core modules
const path = require("path");

//external modules
const express = require("express");
const userRouter = express.Router();

//local module

const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb home",
  });
});

module.exports = userRouter;
