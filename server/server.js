const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'start' folder
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/libs', express.static(path.join(__dirname, '../libs')));
app.use('/start', express.static(path.join(__dirname, '../start')));
app.use('/complete', express.static(path.join(__dirname, '../complete')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});