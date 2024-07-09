import express from 'express';
import { logger } from '../logger/logger.js';

const authRouter = express.Router();

authRouter.use((req, res, next) => {
  const authorization = req.headers.authorization;
  logger.info(`header > authorization > ${authorization}`);
  next();
});

authRouter.post('/', (req, res) => {
  const data = {
    accessToken: 'this is access token',
    refreshToken: 'this is refresh token',
  };
  res.send(data);
});

export default authRouter;
