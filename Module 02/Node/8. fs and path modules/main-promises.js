// this is lec 86

import fs from "fs/promises"

let a  = await fs.readFile("poojan1.txt")

let b = await fs.writeFile("poojan1.txt","\n\n\n\n Hello this text is from write file")

console.log(a.toString(), b)