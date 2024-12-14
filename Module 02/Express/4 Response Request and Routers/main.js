// this is lec 89

const express = require('express')
const app = express()
const blog = require('.\\Routes\\blog.js')
const shop = require('.\\Routes\\shop.js')

// http://localhost:3000/blog
app.use('/blog', blog)
app.use('/shop', shop)
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World2!')
})

app.post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send('Hello World post!!')
})
// http://localhost:3000/mypage.html 


//chaining of request:
/*
app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World2!')
}).post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send('Hello World post!!')
})
*/


// serving html file 
app.get('/index', (req, res) => {
  res.sendFile('tamplates/index.html', { root: __dirname })
})


//send json file through api
app.get('/api', (req, res) => {
  res.json({ a: 5, b: 6, name: ["poojan", "harsh"] })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})