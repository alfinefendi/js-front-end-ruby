// app.js

const express = require('express');
const path = require('path');

const app = express();
const HOST = '192.168.1.102';
const PORT = 4000;
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to load index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://192.168.1.102:${PORT}`);
});
