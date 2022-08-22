import { createLogger, format, transports } from 'winston';
import morgan from 'morgan';
// const stripFinalNewLine = require('strip-final-newline');

// Setup logger
const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

// Setup requests logger
morgan.token('id', (req: any) => req.id);

const requestFormat = ':remote-addr [:date[iso]] :id ":method :url" :status';
const requests = morgan(requestFormat, {
  stream: {
    write: (message: string) => {
      // Remove all line breaks
      // const log = stripFinalNewLine(message);
      const log = message.replace(/(\r\n|\n|\r)/gm, '');
      return logger.info(log);
    },
  },
});

// Attach to logger object
logger.requests = requests;

// Format as request logger and attach to logger object
logger.header = (req: any) => {
  const date = new Date().toISOString();
  return `${req.ip} [${date}] ${req.id} "${req.method} ${req.originalUrl}"`;
};

module.exports = logger;
