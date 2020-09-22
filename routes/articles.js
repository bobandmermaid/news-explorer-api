const router = require('express').Router();
const { idValid, createArticleValid } = require('../middlewares/validation');
const { getArticle, createArticle, deleteArticle } = require('../controllers/articles');

router.get('/', getArticle);
router.post('/', createArticleValid, createArticle);
router.delete('/:articleId', idValid, deleteArticle);

module.exports = router;
