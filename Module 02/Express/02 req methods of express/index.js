// req.params()
// req.query()
// req.body()
// req.method() - get post
// req.url() - url path
// req.headers() - headers



const express = require('express')
const app = express()

// req.params
// Route parameters
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});
// If URL is: /users/42
// req.params.id = "42"


// req.query
// Query string parameters
app.get('/search', (req, res) => {
  console.log(req.query.q);
});
// If URL is: /search?q=phone
// req.query.q = "phone"


// req.body
// Data sent in request body (POST/PUT)
app.use(express.json());
app.post('/login', (req, res) => {
  console.log(req.body.username);
});
// If JSON: {"username": "pujan"}
// req.body.username = "pujan"  


// req.method
// HTTP method
app.get('/users', (req, res) => {
  console.log(req.method);
});
// Output: GET


// req.url
// URL path
app.get('/users', (req, res) => {
  console.log(req.url);
});
// Output: /users


// req.headers
// Request headers
app.get('/users', (req, res) => {
  console.log(req.headers);
});
// Output: {
//   "host": "localhost:3000",
//   "connection": "keep-alive",
//   "user-agent": "Mozilla/5.0 ...",
//   "accept": "*/*"
// }


app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})