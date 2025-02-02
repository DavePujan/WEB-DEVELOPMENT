const express = require('express');
const path = require('path');
const Employee = require('../models/employee');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/add', async (req, res) => {
    try {
        await Employee.deleteMany({});

        let employees = [];
        for (let i = 0; i < 10; i++) {
            employees.push({
                name: randomName(),
                salary: Math.floor(Math.random() * 90000000) + 1000000,
                language: randomLanguage(),
                city: randomCity(),
                isManager: Math.random() > 0.5
            });
        }

        await Employee.insertMany(employees);
        res.json({ message: "10 Employee records added successfully" });
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).json({ error: "An error occurred while adding data.", details: error.message });
    }
});

function randomName() {
    const names = ["Harry", "Ron", "Hermione", "Draco", "Lucius", "Voldemort", "Dumbledore"];
    return names[Math.floor(Math.random() * names.length)];
}

function randomLanguage() {
    const languages = ["Python", "Java", "JavaScript", "C", "C++", "Ruby", "Go"];
    return languages[Math.floor(Math.random() * languages.length)];
}

function randomCity() {
    const cities = ["New York", "Paris", "Mumbai", "London", "Tokyo", "Berlin", "Sydney"];
    return cities[Math.floor(Math.random() * cities.length)];
}

module.exports = router;