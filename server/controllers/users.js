const User = require('../models/user');

const createAccessToken = require('../utils/createAccessToken');
const getAccessToken = require('../utils/getAccessToken');
const verifyToken = require('../utils/verifyToken');

const getUserData = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res.status(401).json({
			success: false,
			error: {
				message: 'Authentication failed. No access token given.',
			},
		});

	const _id = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: {
				message:
					'Authentication failed. Access token is invalid or it has expired.',
			},
		});

	const user = await User.findById(
		_id,
		'email username firstname lastname profileImage'
	);

	if (!user)
		return res.status(401).json({
			success: false,
			error: { message: 'Authentication failed. There is no such user.' },
		});

	return res.status(200).json(user);
};

const authenticate = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res.status(401).json({
			success: false,
			error: { message: 'Authentication failed. No access token given.' },
		});

	const _id = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: {
				message:
					'Authentication failed. Access token is invalid or it has expired.',
			},
		});

	const user = await User.findOne({ _id });

	if (!user)
		return res.status(401).json({
			success: false,
			error: { message: 'Authentication failed. There is no such user.' },
		});

	return res.status(200).json({ success: true, error: null });
};

const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const { _id } = await User.signin(email, password);

		const { token, refreshToken } = createAccessToken(_id);

		return res.status(200).json({ success: true, token, refreshToken });
	} catch (error) {
		return res.status(400).json({ success: false, error });
	}
};

const signUp = async (req, res) => {
	const { email, password, repeatPassword } = req.body;

	try {
		const { _id } = await User.signup(email, password, repeatPassword);

		const { token, refreshToken } = createAccessToken(_id);

		return res.status(200).json({ success: true, token, refreshToken });
	} catch (error) {
		return res.status(400).json({ success: false, error });
	}
};

const refresh = (req, res) => {
	const { refreshToken: rfsh } = req.body;

	if (!rfsh)
		return res.status(401).json({
			success: false,
			error: { message: 'Authentication failed. No refresh token given.' },
		});

	const _id = verifyToken(rfsh, process.env.REFRESH_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: {
				message:
					'Authentication failed. Refresh token is invalid or it has expired.',
			},
		});

	const { token, refreshToken } = createAccessToken(_id);

	return res.status(200).json({ success: true, token, refreshToken });
};

module.exports = {
	getUserData,
	authenticate,
	signIn,
	signUp,
	refresh,
};
