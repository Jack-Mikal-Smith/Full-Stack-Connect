const express = require('express');
const router = express.Router();

const JobPostingController = require('../JobPostingController');

// Define the POST route for creating a product
router.post('/', JobPostingController.create);

module.exports = router;