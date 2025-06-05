const sumRequestHandler = (req, res) => {
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedbody);
    const jsonObject = Object.fromEntries(params);
    const jsonString = JSON.stringify(jsonObject);

    const result = Number(jsonObject["num1"]) + Number(jsonObject["num2"]);
    console.log(result);
    res.write("<html><body>");
    res.write(`result: ${result}`);
    res.write('<a href="/calculator">Try again</a>');
    res.write("</html></body>");

    res.end();
  });
};

module.exports = sumRequestHandler;
