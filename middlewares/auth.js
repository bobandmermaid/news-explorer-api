/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');
const { AUTHORIZATION } = require('../errors/messageError');
require('dotenv').config();

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(AUTHORIZATION);
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    const { NODE_ENV, JWT_SECRET = 'dev-key' } = process.env;

    payload = jwt.verify(token,
      NODE_ENV === 'production' ? JWT_SECRET : 'some-strong-secret');
  } catch (err) {
    throw new UnauthorizedError(AUTHORIZATION);
  }

  req.user = payload;

  next();
};
