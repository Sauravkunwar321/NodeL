const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Form</title></head>");
    res.write("<h1>Welcome to the form </h1>");
    res.write('<form action="/submit" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"/><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" value="male" name="gender"/>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" value="female" name="gender"/>');
    res.write('<label for="female">Female</label>');
    res.write('<br><input type="submit" value="submit">');
    res.write("</form>");
    res.write("</html>");
    res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method == "POST") {
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      console.log(parsedbody);
      console.log("hello");
    });
  }
});

server.listen(3000);
