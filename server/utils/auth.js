const verifyToken = require('./verifyToken');

const auth = async (req, res, next) => {
	console.log(req.path, req.method, req.body);

	if (
		req.path.includes('/sign-in') ||
		req.path.includes('/sign-up') ||
		req.path.includes('/refresh')
	)
		return next();

	const accessToken = req.headers.authorization?.split(' ')[1];

	const _id = verifyToken(accessToken, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(200).json({
			success: false,
			error: {
				message:
					'Authentication failed. Access token is invalid or it has expired.',
			},
		});

	req.authId = _id;
	return next();
};

module.exports = auth;
