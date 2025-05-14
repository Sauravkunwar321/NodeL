const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<nav>");
    res.write(`<ul style="
      list-style-type:none;
      display:flex;
       gap:50px; 
       font-family:sans-serif;
      ">`);
    res.write('<li><a href="/">Home</a></li>');
    res.write('<li><a href="/men">Men</a></li>');
    res.write('<li><a href="/women">Women</a></li>');
    res.write('<li><a href="/kids">Kids</a></li>');
    res.write('<li><a href="/cart">Cart</a></li>');
    res.write("</ul>");
    res.write("</nav>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } 
  else if(req.url === "/men"){
    res.setHeader("content-type", "text/html");
    res.write("<html>")
    res.write("<head><title>Men Section</title></head>")
    res.write("<body><h1>This is Men's Section</h1></body>")
    res.write('</html>')
    return res.end()

  }
  else if(req.url === "/women"){
    res.setHeader("content-type", "text/html");
    res.write("<html>")
    res.write("<head><title>Men Section</title></head>")
    res.write("<body><h1>This is Women's Section</h1></body>")
    res.write('</html>')
    return res.end()

  } else if(req.url === "/kids"){
    res.setHeader("content-type", "text/html");
    res.write("<html>")
    res.write("<head><title>Men Section</title></head>")
    res.write("<body><h1>This is Kid's Section</h1></body>")
    res.write('</html>')
    return res.end()

  } else if(req.url === "/cart"){
    res.setHeader("content-type", "text/html");
    res.write("<html>")
    res.write("<head><title>Men Section</title></head>")
    res.write("<body><h1>This is your all items in cart</h1></body>")
    res.write('</html>')
    return res.end()

  }

  
});

server.listen(3000);
