const express = require('express');

const {
	authenticate,
	signIn,
	signUp,
	refresh,
} = require('../controllers/auth');

const router = express.Router();

router.get('/', authenticate);

router.post('/sign-in', signIn);

router.post('/sign-up', signUp);

router.post('/refresh', refresh);

module.exports = router;
