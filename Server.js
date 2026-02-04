const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// This is your database (a simple file on the server)
let dbFile = './database.json';

// Initialize database if it doesn't exist
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({ shows: [] }));
}

// Route to get all shows
app.get('/shows', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dbFile));
    res.json(data.shows);
});

// Route to add a new show
app.post('/add-show', (req, res) => {
    const { name, folderId, password } = req.body;
    
    // Simple security check
    if (password !== "dkdk123") return res.status(403).send("Unauthorized");

    const data = JSON.parse(fs.readFileSync(dbFile));
    data.shows.push({ name, folderId });
    fs.writeFileSync(dbFile, JSON.stringify(data));
    
    res.send("Show Injected to Backend");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
