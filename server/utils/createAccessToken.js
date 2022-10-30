const jwt = require('jsonwebtoken');

const createAccessToken = (_id) => {
	const token = jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '1h',
	});
	const refreshToken = jwt.sign({ _id }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '2d',
	});

	return { token, refreshToken };
};

module.exports = createAccessToken;
