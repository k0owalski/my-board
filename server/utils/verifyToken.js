const jwt = require('jsonwebtoken');

const verifyToken = (token, secret) =>
	jwt.verify(token, secret, (error, data) => ({ error, data }));

module.exports = verifyToken;
