// this is lec 86

const fs = require("fs")

// console.log(fs)

console.log("Started creating file")
fs.writeFileSync("poojan1.txt", "Hello this is first file created by file sync")   // work line by line
console.log("file created")

console.log("\n")

console.log("Started creating file")
fs.writeFile("poojan2.txt", "Hello this is second file created by file sync",()=> {
    console.log("Working on it")
   })   //show o/p when done, doesn't work line by line.
console.log("file created")

console.log("appending the given text in given file.")
fs.appendFile("poojan1.txt",", appended this data.",(error,data)=>{
    console.log(data)
})
console.log("ending of append")