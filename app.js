/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const limiter = require('./middlewares/limiter');
const InValidUrl = require('./InValidUrl');
const HandlerError = require('./middlewares/HandlerError');
const loggerPath = require('./middlewares/loggerPath');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

require('dotenv').config();

const {
  DB_CONN = 'mongodb://localhost:27017/mestodb', PORT = '3000',
} = process.env;

const app = express();

mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(loggerPath);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(limiter);
app.use(helmet());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use('*', InValidUrl);
app.use('/', HandlerError);

app.listen(PORT, () => {
  console.log(`Порт: ${PORT}`);
});
