const express = require('express');

const {
	getUserData,
	authenticate,
	signIn,
	signUp,
	refresh,
} = require('../controllers/users');

const router = express.Router();

router.get('/me', getUserData);

router.get('/me/auth', authenticate);

router.post('/me/sign-in', signIn);

router.post('/me/sign-up', signUp);

router.post('/me/refresh-token', refresh);

module.exports = router;
