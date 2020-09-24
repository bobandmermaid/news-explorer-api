// Сообщения ошибок
const ID = 'invalid ID';
const EMPTY_FIELD = 'The line is not filled. ';
const KEYWORD = 'Keyword missing';
const TITLE = 'No title';
const TEXT = 'No text';
const DATE = 'No date';
const SOURCE = 'No source';
const NAME = 'The field must contain from 3 to 20 characters';
const EMAIL = 'Email is not correct';
const PASSWORD_SIGNUP = 'The password must contain lowercase, uppercase letters, numbers, special characters. Minimum 8 characters';
const PASSWORD = 'Password must contain at least 8 characters';
const URL = 'Invalid address';

const ARTICLE_MISSING = 'Article missing';
const ARTICLE_PERMISSION = 'You can\'t delete someone else\'s article';

const NO_USER = 'There is no such user';

const AUTH = 'Authorization required';

const CAST_ERR = 'ID not found';
const EMAIL_USE = 'This email is already in use';

const TRIM = 'Spaces are not allowed';
const INCORRECT_LOGIN = 'Incorrect email or password';

const NOT_FOUND = 'The requested resource is not found';

module.exports = {
  NOT_FOUND,
  INCORRECT_LOGIN,
  TRIM,
  CAST_ERR,
  EMAIL_USE,
  AUTH,
  NO_USER,
  ARTICLE_MISSING,
  ARTICLE_PERMISSION,
  ID,
  DATE,
  EMAIL,
  EMPTY_FIELD,
  KEYWORD,
  NAME,
  PASSWORD,
  SOURCE,
  TEXT,
  TITLE,
  PASSWORD_SIGNUP,
  URL,
};
