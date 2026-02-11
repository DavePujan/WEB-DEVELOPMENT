// this is lec 88

// Content: Route Parameters vs Query Strings




/* http://localhost:3000/blog/intro-to-js?mode=dark&region=in
 here blog and intro to js are parameters and (mode = dark) and (region = in) both are query parameters.
 */
const express = require('express')
const app = express()
const port = 3000

// http://localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('about,Hello World!')
})

// http://localhost:3000/contact
app.get('/contact', (req, res) => {
    res.send('contact,Hello World!')
})

// http://localhost:3000/blog
app.get('/blog', (req, res) => {
    res.send('blog,Hello World!')
})

//http://localhost:3000/blog/intro-to-js
app.get('/blog/intro-to-js', (req, res) => {
    res.send('Hello World!,this is intro-to-js')
})

//this is the use of params (parameters)
// http://localhost:3000/blog/xyz
app.get('/blog/:slug', (req, res) => {
    res.send(`Hello World!,this is ${req.params.slug}`)
})

// http://localhost:3000/blog/xyz/abc
app.get('/blog/:slug/:second', (req, res) => {
    res.send(`Hello World!,this is ${req.params.slug} and introduction of ${req.parags.second}`)
})






// now query string
// Used for filtering/searching/sorting.
app.get('/products', (req, res) => {
    console.log(req.query.category);
});

// URL:
// /products?category=mobile&sort=price
// req.query = { category: "mobile", sort: "price" }
// Optional parameters.






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})