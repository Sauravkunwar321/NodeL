const path = require("path");

const express = require("express");

const app = express();
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const rootDir = require("./utils/pathUtil");

app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
