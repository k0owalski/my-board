const jwt = require('jsonwebtoken');

const createAccessToken = (_id) => {
	const accessToken = jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '120s',
	});
	const refreshToken = jwt.sign({ _id }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '2d',
	});

	return { accessToken, refreshToken };
};

module.exports = createAccessToken;
