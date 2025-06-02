// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log("hello");
//   res.setHeader('content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>My coding</title></head>')
//   res.write('<body><h1>Saurav kunwar</h1></body>')
//   res.write('</html>')
//   res.end()
// })

// server.listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("hello");
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My name</title></head>");
//   res.write("<body><h1>Saurav kunwar wow</h1></body>");
//   res.write("</html>");
// });

// server.listen(3000);

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>wow</title></head>");
  res.write("<body><h1>comeon man</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
