const jwt = require('jsonwebtoken');

const createAccessToken = (_id) =>
	jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2d' });

module.exports = createAccessToken;
