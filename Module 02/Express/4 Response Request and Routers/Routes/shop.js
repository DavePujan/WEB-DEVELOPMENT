const express = require('express')
const router = express.Router()

// define the home page route
// http://localhost:3000/shop
router.get('/', (req, res) => {
  res.send('shop home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})


module.exports = router