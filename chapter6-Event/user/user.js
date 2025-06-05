const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Form</title></head>");
    res.write("<h1>Welcome to Home Page</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder ="Enter your name"><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="male">Male</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<label for="female">Female</label>');
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      const jsonObject = Object.fromEntries(params);
      console.log(jsonObject);
      jsonString = JSON.stringify(jsonObject);
      console.log(jsonString);
      fs.writeFile("user-det.txt", jsonString, (error) => {
        console.log("all done successfully. okk");
        res.statusCode = 302;
        res.setHeader("Location", "/");
      });
     
    });
    
  } else{
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>Hello</title></head><body><h1>kaise ho</h1></body></html>"
    );
    res.end();

  }

  
};

module.exports = requestHandler;
