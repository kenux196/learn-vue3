import express from 'express';

const birdsRouter = express.Router();

birdsRouter.use((req, res, next) => {
  const locale = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
  const now = new Date(locale);
  console.log('Time: ', locale);
  next();
});

birdsRouter.get('/', (req, res) => {
  res.send('Birds home page');
});

birdsRouter.get('/about', (req, res) => {
  res.send('About birds');
});

export default birdsRouter;
