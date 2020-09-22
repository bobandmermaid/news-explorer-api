/* eslint-disable consistent-return */
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');

module.exports.getUser = async (req, res, next) => {
  const owner = req.user._id;
  try {
    const user = await User.findById(owner)
      .orFail(() => new NotFoundError('There is no such user'));
    return res.send({
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    return next(err);
  }
};
