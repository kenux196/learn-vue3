import express from 'express';
import path from 'node:path';
import history from 'connect-history-api-fallback';
import morgan from 'morgan';
import { logger } from './logger/logger.js';

import indexRouter from './router/index.js';
import birdsRouter from './router/birds.js';

const port = process.env.SERVER_PORT || 3000;
const LOG_FORMAT = ':method :url :status :response-time(ms)';

const app = express();

// config
app
  .use(morgan(LOG_FORMAT, { stream: logger.stream }))
  .use(history())
  .use('/', express.static(path.resolve() + '/public'));

// routers
app.use('/', indexRouter);
app.use('/birds', birdsRouter);

app.listen(port, () => {
  logger.info('info log');
  logger.warn('warn log info log');
  logger.error('error log');
  console.log(`Server is running on port: ${port}`);
});
