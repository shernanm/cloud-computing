const mongoose = require('mongoose');
const config = require('../config').common.database;
const logger = require('../app/logger');

// const { host, port, username } = config;
const { connectionString } = config;

// const connectionString = `mongodb://${host}:${port}/${username}`;

mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    logger.info('Database is ONLINE');
  })
  .catch(error => {
    logger.error(error);
  });

module.exports = mongoose;
