const express = require('express')
const router = express.Router()

// define the home page route
// http://localhost:3000/blog
router.get('/', (req, res) => {
  res.send('blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

http://localhost:3000/blog/blogpost/hello
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router