const sumRequestHandler = (req, res) => {
  console.log("1st event");
  let result;
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2nd event");
  });

  req.on("end", () => {
    console.log("3rd event");

    const parsedbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedbody);
    const jsonObject = Object.fromEntries(params);

    result = Number(jsonObject["num1"]) + Number(jsonObject["num2"]);
    console.log(result);
  });
  console.log("4th event");

  res.write("<html><body>");
  res.write(`<h1>result: ${result}</h1>`);
  res.write('<a href="/calculator">Try again</a>');
  res.write("</html></body>");

  res.end();
};

module.exports = sumRequestHandler;
