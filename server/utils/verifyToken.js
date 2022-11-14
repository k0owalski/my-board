const jwt = require('jsonwebtoken');

const verifyToken = (token, secret) =>
	jwt.verify(token, secret, (_error, data) => data?._id);

module.exports = verifyToken;
