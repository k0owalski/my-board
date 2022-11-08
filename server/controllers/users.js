const User = require('../models/user');

const createAccessToken = require('../utils/createAccessToken');
const getAccessToken = require('../utils/getAccessToken');
const verifyToken = require('../utils/verifyToken');

const getUserData = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res
			.status(401)
			.json({ message: 'Authorization failed. No access token given.' });

	const { error, data } = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!data?._id)
		return res.status(401).json({
			error: error.message,
			message:
				'Authorization failed. Access token is invalid or it has expired.',
		});

	const user = await User.findById(
		data._id,
		'email username firstname lastname profileImage'
	);

	if (!user)
		return res
			.status(401)
			.json({ message: 'Authorization failed. There is no such user.' });

	return res.status(200).json(user);
};

const authenticate = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res
			.status(401)
			.json({ message: 'Authorization failed. No access token given.' });

	const { error, data } = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!data?._id)
		return res.status(401).json({
			error: error.message,
			message:
				'Authorization failed. Access token is invalid or it has expired.',
		});

	const user = await User.findOne({ _id: data._id });

	if (!user)
		return res
			.status(401)
			.json({ message: 'Authorization failed. There is no such user.' });

	return res.status(200).json({ isAuthenticated: true });
};

const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.signin(email, password);

		const { token, refreshToken } = createAccessToken(user._id);

		return res
			.status(200)
			.cookie('token', token, { maxAge: 360000, httpOnly: true })
			.json({ refreshToken });
	} catch (error) {
		return res.status(400).json(error);
	}
};

const signUp = async (req, res) => {
	const { email, password, repeatPassword } = req.body;

	try {
		const user = await User.signup(email, password, repeatPassword);

		const { token, refreshToken } = createAccessToken(user._id);

		return res
			.status(200)
			.cookie('token', token, { maxAge: 360000, httpOnly: true })
			.json({ refreshToken });
	} catch (error) {
		return res.status(400).json(error);
	}
};

const refresh = (req, res) => {
	const { refreshToken: rfsh } = req.body;

	if (!rfsh)
		return res
			.status(401)
			.json({ message: 'Authorization failed. No refresh token given.' });

	const { error, data } = verifyToken(rfsh, process.env.REFRESH_TOKEN_SECRET);

	if (!data?._id)
		return res.status(401).json({
			error: error.message,
			message:
				'Authorization failed. Refresh token is invalid or it has expired.',
		});

	const { token, refreshToken } = createAccessToken(data._id);

	return res
		.status(200)
		.clearCookie('token', { maxAge: 360000, httpOnly: true })
		.cookie('token', token, { maxAge: 360000, httpOnly: true })
		.json({ refreshToken });
};

module.exports = {
	getUserData,
	authenticate,
	signIn,
	signUp,
	refresh,
};
