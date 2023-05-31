const express = require('express');
const router = express.Router();

const UserController = require('../UserController');

// Define the POST route for creating a user
router.post('/', UserController.create);

module.exports = router;
