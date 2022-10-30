const jwt = require('jsonwebtoken');

const verifyToken = (token, secret) =>
	jwt.verify(token, secret, (err, id) => {
		if (err) return;

		return id;
	});

module.exports = verifyToken;
