const express = require('express');
const fs = require('fs');
const path = require('path');
const cors=require('cors')
const app = express();
const port = process.env.PORT || 5000;

// Serve the db.json file
app.use(cors());
app.use(express.json());
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
app.get('/vendor/pendingworks', (req, res) => {
    const dbPath = path.join(__dirname, 'pendingworks.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        res.json(JSON.parse(data));
    });
});


app.put('/vendor/pendingworks/:id', (req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;

    const dbPath = path.join(__dirname, 'pendingworks.json');
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the database file');
        }
        let pendingWorks = JSON.parse(data);
        const taskIndex = pendingWorks.findIndex((task) => task.id === parseInt(id));

        if (taskIndex === -1) {
            return res.status(404).send('Task not found');
        }

        pendingWorks[taskIndex] = updatedTask;

        fs.writeFile(dbPath, JSON.stringify(pendingWorks, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error updating the task');
            }
            res.json(updatedTask);
        });
    });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
