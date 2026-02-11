// res.send()
// res.json()
// res.status()
// res.render()

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/json', (req, res) => {
    res.json({ name: "John", age: 30 });
});

app.get('/status', (req, res) => {
    res.status(200).send("OK");
});

app.get('/render', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});