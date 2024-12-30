const express = require('express');
const fs = require('fs');
const path = require('path');
const cors=require('cors')
const app = express();
const port = process.env.PORT || 5000;

// Serve the db.json file
app.use(cors());
app.get('/users', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        res.json(JSON.parse(data));
    });
});
app.get('/vendor', (req, res) => {
    const dbPath = path.join(__dirname, 'vendor.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        res.json(JSON.parse(data));
    });
});
app.get('/deliveryboy', (req, res) => {
    const dbPath = path.join(__dirname, 'deliveryboy.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        res.json(JSON.parse(data));
    });
});
app.get('/login', (req, res) => {
    const dbPath = path.join(__dirname, 'login.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        res.json(JSON.parse(data));
    });
});
app.get('/vendor/service', (req, res) => {
    const dbPath = path.join(__dirname, 'ServiceVendor.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        res.json(JSON.parse(data));
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
