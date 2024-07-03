const express = require('express');
const path = require('node:path');
const history = require('connect-history-api-fallback');

const app = express();
const port = 3000;

app.use(history()).use(express.static(__dirname + '/public'));

const birds = require('./birds');
app.use('/birds', birds);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/public', 'index.html'));
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/', (req, res) => {
  res.send('Got a PUT request');
});

app.delete('/', (req, res) => {
  res.send('Got a DELETE request');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
