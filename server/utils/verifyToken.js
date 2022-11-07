const jwt = require('jsonwebtoken');

const verifyToken = (token, secret) =>
	jwt.verify(token, secret, (err, data) => {
		if (err) return;

		return data;
	});

module.exports = verifyToken;
