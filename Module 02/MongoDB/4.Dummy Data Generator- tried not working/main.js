require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', employeeRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});