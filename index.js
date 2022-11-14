const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors');
const port = 19998

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})