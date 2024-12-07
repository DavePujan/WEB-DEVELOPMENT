// this is lec 88

/* some que:
why do we use express JS?
why nodemon?
install express@4 --> npm i express@4
Request parameters and queries
static files
*/
import express from 'express'
const app = express()
const port = 3000

// app.get or app.post or app.put or app.delete  (path , handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
