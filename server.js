const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
