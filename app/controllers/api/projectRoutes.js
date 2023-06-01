const express = require('express');
const router = express.Router();

const projectController = require('../ProjectController');

// Define the POST route for creating a product
router.post('/', projectController.create);

module.exports = router;
