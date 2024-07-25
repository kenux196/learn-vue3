import express from 'express';
import path from 'node:path';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), '/public', 'index.html'));
});

indexRouter.post('/', (req, res) => {
  res.send('Got a POST request');
});

indexRouter.put('/', (req, res) => {
  res.send('Got a PUT request');
});

indexRouter.delete('/', (req, res) => {
  res.send('Got a DELETE request');
});

indexRouter.get('/about', (req, res) => {
  res.send('/about');
});

export default indexRouter;
