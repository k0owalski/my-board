const express = require('express');

const { getUserData } = require('../controllers/users');

const router = express.Router();

router.get('/me', getUserData);

module.exports = router;
