console.log("1. start of script")

Promise.resolve().then(() => console.log("2.promise done"));

setTimeout(()=> console.log("3.timer"));

const fs = require('fs');
fs.readFile('user-details.txt', ()=> console.log("4.I/O opearation"))

setImmediate(()=> console.log("5. immediate"))

process.on("exit", ()=>{
  console.log("6.exit event")
})

console.log("end")