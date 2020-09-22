const router = require('express').Router();
const { createUserValid, loginValid } = require('../middlewares/validation');
const { createUser, login } = require('../controllers/auth');

router.post('/', loginValid, login);
router.post('/', createUserValid, createUser);

module.exports = router;
