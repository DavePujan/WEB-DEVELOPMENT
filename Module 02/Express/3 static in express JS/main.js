// this is lec 88
//let's check which file will be shown to us : file in public vs file in main folder

const express = require('express')
const app = express()
const port = 3000

// // http://localhost:3000/public.poojan.txt   --> public file will be considered here.
// app.use(express.static('public'))

// // To use multiple static assets directories:
// app.use(express.static('public'))
// app.use(express.static('static'))

/*http://localhost:3000/img/cat.txt:
Found in /public/img/cat.txt.

http://localhost:3000/img/dog.txt:
Found in /public/img/dog.txt (first middleware).
The version in /files/img/dog.txt will not be used because public is checked first.

http://localhost:3000/img/bird.txt:
Not found in public.
Found in /files/img/bird.txt. 
*/

// // http://localhost:3000/static/public.poojan.txt
// app.use('/static', express.static('public'))
// // The /static part in the URL is not part of the directory structure but is a virtual prefix created by the code.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 