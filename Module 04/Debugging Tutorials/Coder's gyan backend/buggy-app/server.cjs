const express = require('express');
const app = express();
const { calculateItemTotal, calculateTotal } = require('./cart');

// BUG 1: Missing middleware to parse JSON body
// app.use(express.json()); 
app.use(express.json());

app.post('/get-total', (req, res) => {
    const cart = req.body;

    // This will fail first because req.body is undefined (Bug 1)
    const total = calculateTotal(req.body);

    res.json({ total });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
