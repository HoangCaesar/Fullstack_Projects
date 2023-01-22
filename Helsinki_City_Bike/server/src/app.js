const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const createError = require('http-errors')

// Project import
const appRoute = require('./api/v1/routes');
require('./config/mongodb.config');
const errorHandler = require('./api/v1/helpers/errorHandler')

// ========================================== APP - setting project ===============================================

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', appRoute);

app.use((req, res, next) => {
    next(createError.NotFound("This route does not exist."))
})

app.use(errorHandler);

module.exports = app;
