const NotFoundError = require('./errors/not-found-err');
const { NOT_FOUND } = require('./errors/messageError');

module.exports = (req, res, next) => {
  try {
    throw new NotFoundError(NOT_FOUND);
  } catch (error) {
    next(error);
  }
};
