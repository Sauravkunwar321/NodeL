const sumRequestHandler = require("./sum");

const requestserver = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to our calculator app</h1>");
    res.write('<button><a href="/calculator">Go to calculator</a></button>');
    res.write("</body>");
    res.write("</html>");
    res.end();
  }

  if (req.url.toLowerCase() === "/calculator") {
    res.write("<html>");
    res.write("<head><title>My Calculator Form</title></head>");
    res.write("<body>");
    res.write('<form action="/calculator-result" method="POST">');
    res.write('<label for="num1">Enter first number:</label>');
    res.write('<input type="text" name="num1" />');
    res.write('<label for="num2">Enter second number:</label>');
    res.write('<input type="text" name="num2" />');
    res.write('<input type="submit" value="submit"/>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }

  if (req.url === "/calculator-result" && req.method == "POST") {
    sumRequestHandler(req, res);
  }
};

module.exports = requestserver;
