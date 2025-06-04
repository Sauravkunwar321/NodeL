const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

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

      const params = new URLSearchParams(parsedbody);
      // console.log(params.entries);
      // const jsonObject = {};
      // for (const [key, value] of params.entries()) {
      //   jsonObject[key] = value;
      // }
      const jsonObject = Object.fromEntries(params);
      console.log(jsonObject);
      const jsonString = JSON.stringify(jsonObject);
      fs.writeFileSync("details.txt", jsonString);
    });
  }
});

server.listen(3000);


// req.on("end", ()=>{
//   const parseddata = Buffer.concat(buffer).toString();
//   const params = new URLSearchParams(parseddata);
//   const jsonObject = Object.fromEntries(params);
//   const jsonString = JSON.stringify(jsonObject);
//   fs.writeFileSync("saurav.txt", jsonString);
// })

// req.on("data", (chunk)=> {
//   let body = []
//   body.push(chunk)
// })

// req.on("end", ()=>{
//  const parsedData = Buffer.concat(body).toString();
//  const params = new URLSearchParams(parsedData);
//  const jsonObject = Object.fromEntries(params);
//  const jsonString =   JSON.stringify(jsonObject);
//  fs.writeFileSync("hello.txt", jsonString);

// })
