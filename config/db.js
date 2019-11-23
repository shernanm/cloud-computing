const mongoose = require('mongoose');
const config = require('../config').common.database;

const { host } = config;
const { port } = config;
const { name } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
module.exports = mongoose.connect(connectionString);
