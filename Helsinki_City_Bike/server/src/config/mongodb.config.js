require('dotenv').config();

// Project import
const mongoDbConnection = require('../api/v1/databases/init.multi.mongodb');

// ======================================== CONFIG MODE =======================================

const { MONGODB_05_2021_URI, MONGODB_06_2021_URI, MONGODB_07_2021_URI, MONGODB_TEST_URI } =
    process.env;

const developmentDatabase = [MONGODB_05_2021_URI, MONGODB_06_2021_URI, MONGODB_07_2021_URI];
const testDatabase = [MONGODB_TEST_URI];

process.env.NODE_ENV === 'test'
    ? testDatabase.forEach((uri) => mongoDbConnection(uri))
    : developmentDatabase.forEach((uri) => mongoDbConnection(uri));
