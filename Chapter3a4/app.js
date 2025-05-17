 //simple node.js server

//  const http = require('http');

//  const server = http.createServer((req, res)=>{

//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>My Coding</title></head>')
//   if(req.url == "/"){
//     res.write('<body><h1>Saurav Kunwar</h1></body>')
   

//   } else if(req.url.toLowerCase() == "/products"){
//     res.write('<body><h2>Wow, What an amazing idea</h2></body>')
//   }
  
//   res.write('</html>')
//   res.end();
  
//  });

//  const port = 3000;
//  server.listen(port, ()=> {
//   console.log(`Server ruuning at http://localhost:${port}`)
//  });

 const http = require('http');
 const fs = require('fs');

 const server = http.createServer((req, res)=>{

  console.log(req)

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My Form</title></head>')
    res.write('<h1>Welcome to Home Page</h1>')
    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="text" name="username" placeholder ="Enter your name"><br>');
    res.write('<label for="gender">Gender:</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<label for="female">Female</label>')
    res.write('<br><input type="submit" value="Submit">')
    res.write('</form>')
    res.write('</html>')
    return res.end()
  } else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){

    fs.writeFileSync('user.txt', "saurav kunwar");
    res.statusCode = 302;
    res.setHeader('Location', '/user');
    res.end()
    
  }

  res.setHeader('Content-Type','text/html');
  res.write('<html><head><title>Hello</title></head><body><h1>kaise ho</h1></body></html>')
  res.end()
 })
 


 server.listen(3000);


// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('content-type','text/html');
//   res.write('<html>')
//   res.write('<head><title>My First Page</title></head>')
//   if(req.url == "/"){
//     res.write('<h1>This is Saurav</h1>')
//   } else if(req.url.toLowerCase() == "/details"){
//     res.write('<h2>This is my detail</h2>')
//   }
//   res.write('</html>')
//   res.end();

// })

// const port =3000;
// server.listen(port, ()=>{
//   console.log(`server ruuning at port http://localhost:${port}`)
// })

