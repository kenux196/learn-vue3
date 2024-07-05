import express from 'express';
import path from 'node:path';
import history from 'connect-history-api-fallback';
import logger from './logger/logger.js';

import indexRouter from './router/index.js';
import birdsRouter from './router/birds.js';

const port = process.env.SERVER_PORT || 3000;

const app = express();

// config
app
  .use(history())
  .use(logger)
  .use('/', express.static(path.resolve() + '/public'));

// routers
app.use('/', indexRouter);
app.use('/birds', birdsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
