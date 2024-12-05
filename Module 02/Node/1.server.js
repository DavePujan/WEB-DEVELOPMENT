// lec 85 cwh

console.log("hello")

// node .\2.server.js to run
// npm init to create the package.json
// use npm install slugify to add node modules

// use only npm install to download deleted packages ane jo tame koi repo copy karta hoi to ena mate bhi tamare modules download karva pade karan ke repo mma node modules nakhela na hoi etle tame ena mate npm install use kari sako.

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some string', '_')  // some_string
console.log(b)

// slug etle je url link ma aave e hoi