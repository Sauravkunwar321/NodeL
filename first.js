const fs = require('fs')


fs.writeFile("output.txt","Writing file", (err) => {
  if(err) console.log("Error occured");
  else console.log("Filw ritten siccessfully")
});

fs.writeFile("file.txt", "my file", (err)=> {
  if(err) console.log("err");
else console.log("success")});