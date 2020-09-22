const { celebrate, Joi } = require('celebrate');
const validUrl = require('./validUrl');

Joi.objectId = require('joi-objectid')(Joi);

const idValid = celebrate({
  params: Joi.object().keys({
    articleId: Joi.objectId(),
  }),
});

const createArticleValid = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.required().custom((v) => validUrl(v)),
    image: Joi.required().custom((v) => validUrl(v)),
  }),
});

const createUserValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().pattern(
      new RegExp('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!&$%#? "])(?=\\S+$).*$'),
    ).message('Пароль должен содержать строчные, прописные буквы, цифры, спецсимволы. Минимум 8 символов'),
    repeat_password: Joi.ref('password'),
  }),
});

const loginValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports = {
  idValid,
  createArticleValid,
  createUserValid,
  loginValid,
};
