const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/auth');
const { createUserValid, loginValid } = require('../middlewares/validation');

router.use('/users', auth, users);
router.use('/articles', auth, articles);

router.post('/signin', loginValid, login);
router.post('/signup', createUserValid, createUser);

module.exports = router;
