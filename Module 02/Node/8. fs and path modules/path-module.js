// this is lec 86

// dirname  : full path
// extname  : extension name
// basename : file name
// Join: it join the given path
import path from "path"

let extname = (".\\Node\\8. fs and path modules\\path-module.js")
console.log(path.extname(extname))

console.log(path.dirname(extname));
console.log(path.basename(extname));

var directories = path.dirname('./Node/8. fs and path modules/path-module.js');
console.log(directories);

var filename = path.basename('./Node/8. fs and path modules/path-module.js');
console.log(filename);

var ext = path.extname('./Node/8. fs and path modules/path-module.js');
console.log(ext);

var x = path.join('Node', '8. fs and path modules', 'path-module.js');
console.log(x);