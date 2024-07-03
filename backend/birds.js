const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  const locale = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
  const now = new Date(locale);
  console.log('Time: ', locale);
  next();
});

router.get('/', (req, res) => {
  res.send('Birds home page');
});

router.get('/about', (req, res) => {
  res.send('About birds');
});

module.exports = router;
