// eslint-disable-next-line @typescript-eslint/no-var-requires
const { connect: connect0, connection } = require('mongoose');

import logger from './config/logger';

exports.connect = (
  // eslint-disable-next-line
  { protocol = 'mongodb', url, username = '', password = '' },
  // eslint-disable-next-line
  options = {},
) => {
  let dburl = '';

  // Require auth
  if (username && password) {
    dburl = `${protocol}://${username}:${password}@${url}`;
  } else {
    dburl = `${protocol}://${url}`;
  }

  const mongourl = process.env.MONGO_ATLAS || dburl;

  connect0(mongourl, {
    ...options,
  });

  connection.on('open', () => {
    logger.info('Database connected');
  });

  connection.on('close', () => {
    logger.info('Database disconnected');
  });

  connection.on('error', (err) => {
    logger.error(`Database connection error: ${err}`);
  });

  process.on('SIGINT', () => {
    connection.close(() => {
      logger.info('Database connection disconnected through app termination');
      process.exit(0);
    });
  });
};

exports.disconnect = () => {
  connection.close(() => {
    logger.info('Database disconnected');
  });
};
