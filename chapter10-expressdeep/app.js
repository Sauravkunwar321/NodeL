const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res, next) => {
  console.log("handling / for get");
  res.send(`<h1>welcome saurav</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  // console.log("handling / for get");
  res.send(`
    <h1>Please give your details</h1>
    <form action="/contact-us"  method="POST">
    <input type="text" placeholder="enter your name" name="name" />
    <input type="text" placeholder="enter your email" name="email" />
    <input type="submit"></input> 
    </form>
    `);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log(req.url, req.body);
  res.send(`<h1>Form has been submited</h1>`);
});

app.listen(3001);
