const router = require('express').Router();
const { TextPosts } = require('../../models');

const textPostController = require('../TextPostController');

router.post('/', textPostController.create);

module.exports = router;