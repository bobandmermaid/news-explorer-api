const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
// const authUser = require('./auth');
const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/auth');
const { createUserValid, loginValid } = require('../middlewares/validation');

router.use('/users', auth, users);
router.use('/articles', auth, articles);
router.use('/signin', loginValid, login);
router.use('/signup', createUserValid, createUser);

module.exports = router;
