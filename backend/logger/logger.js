import morgan from 'morgan';

const LOG_FORMAT =
  '[:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

const logger = morgan(LOG_FORMAT);

export default logger;
