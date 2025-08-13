const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static fayllarni ulash
app.use(express.static(path.join(__dirname)));

// Bosh sahifa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(Server ${PORT} portida ishlamoqda);
});
