// this is lec 92

const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs');  // ejs or pug or handlebars

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["hello1","hello2","hello3"]
  res.render("index.ejs",{siteName : siteName, search : searchText, arr}) // here you can give name or you can also change...
//   or 
// res.render("views/index.html",{siteName,searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "adidas wht and when?"
    let blogContent = "its a very nice brand"

  res.render("blogpost.ejs",{blogContent : blogContent, blogTitle : blogTitle}) 
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
