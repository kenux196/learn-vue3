import express from 'express';
import path from 'node:path';
import history from 'connect-history-api-fallback';
import birdsRouter from './birds.js';

const app = express();
const port = 3000;

app.use(history()).use(express.static(path.resolve() + '/public'));

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
app.use(myLogger).use(requestTime);

app.use('/birds', birdsRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), '/public', 'index.html'));
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

app.get(
  '/example/b',
  (req, res, next) => {
    console.log('the response will be sent by the next function...');
    next();
  },
  (req, res) => {
    console.log('after next()');
    res.send('Hello from B!');
  }
);

app.get('/middleware', (req, res) => {
  res.send(`Hello World! Requested at: ${req.requestTime}`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
