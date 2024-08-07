import './config/env.js';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import history from 'connect-history-api-fallback';
import morgan from 'morgan';
import { logger } from './logger/logger.js';

import indexRouter from './router/index.js';
import birdsRouter from './router/birds.js';
import authRouter from './router/auth.js';

const port = process.env.SERVER_PORT || 3000;
const LOG_FORMAT = ':method :url :status :response-time(ms)';

const app = express();

// config
app
  .use(morgan(LOG_FORMAT, { stream: logger.stream }))
  .use(cors())
  .use(history())
  .use('/', express.static(path.resolve() + '/public'));

// routers
app.use('/', indexRouter);
app.use('/birds', birdsRouter);
app.use('/login', authRouter);

app.listen(port, () => {
  logger.info('Learn-Vue3 Backend Server~~');
  logger.info(`Server is running on port: ${port}`);
});
