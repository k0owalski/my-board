const express = require('express');

const {
	authenticate,
	signIn,
	signUp,
	refreshToken,
} = require('../controllers/auth');

const router = express.Router();

router.post('/', authenticate);

router.post('/sign-in', signIn);

router.post('/sign-up', signUp);

router.post('/refresh-token', refreshToken);

module.exports = router;
