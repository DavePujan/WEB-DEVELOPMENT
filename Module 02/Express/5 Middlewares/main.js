// this is lec 90

const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

// app.use(express.static('public'))  // this is built in middleware

/* basic syntax
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
app.use(myLogger)
*/

// // but you can also use it like this
// app.use((req, res, next) => {
//     console.log('m1')
//     next()
// })

app.use((req, res, next) => {
    fs.appendFileSync('.\\Module 02\\Express\\5 Middlewares\\log.txt',`${Date.now()} is a ${req.method}\n`)
    req.harry = " ,hey again from m1 middleware"
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

app.use((req, res, next) => {
    console.log('m2')
    req.harry = " ,hey again from m2 middleware"
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!'+ req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})