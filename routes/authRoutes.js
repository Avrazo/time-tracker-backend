// routes/authRoutes.js

const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', signup);

module.exports = router;
