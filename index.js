const express = require('express')
const path = require('path')
const app = express()
const port = 19998

app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
