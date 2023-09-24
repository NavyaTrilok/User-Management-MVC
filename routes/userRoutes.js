const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

// Register a new user
router.post('/register', UserController.registerUser);

// Log in a user
router.post('/login', UserController.loginUser);

// Update user information
router.post('/update-info', UserController.updateUser);

// Update user password
router.post('/update-password', UserController.updatePassword);

module.exports = router;