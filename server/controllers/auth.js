const User = require('../models/user');

const createAccessToken = require('../utils/createAccessToken');
const verifyToken = require('../utils/verifyToken');

const authenticate = async (req, res) => {
	const { authId } = req;

	const user = await User.findOne({ _id: authId });

	if (!user)
		return res.status(200).json({
			success: false,
			error: { message: 'Authentication failed. There is no such user.' },
		});

	return res.status(200).json({ success: true, error: null });
};

const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const { success, _id, error } = await User.signin(email, password);

		if (!success) return res.status(200).json({ success: false, error });

		const { accessToken, refreshToken } = createAccessToken(_id);

		return res.status(200).json({ success: true, accessToken, refreshToken });
	} catch {
		return res.status(400).json({ success: false });
	}
};

const signUp = async (req, res) => {
	const { email, password, repeatPassword } = req.body;

	try {
		const { success, _id, error } = await User.signup(
			email,
			password,
			repeatPassword
		);

		if (!success) return res.status(200).json({ success: false, error });

		const { accessToken, refreshToken } = createAccessToken(_id);

		return res.status(200).json({ success: true, accessToken, refreshToken });
	} catch {
		return res.status(400).json({ success: false });
	}
};

const refresh = (req, res) => {
	const { refreshToken } = req.body;

	const _id = verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);

	if (!_id)
		return res.status(200).json({
			success: false,
			error: {
				message:
					'Authentication failed. Refresh token is invalid or it has expired.',
			},
		});

	const { accessToken, refreshToken: rfrsh } = createAccessToken(_id);

	return res
		.status(200)
		.json({ success: true, accessToken, refreshToken: rfrsh });
};

module.exports = {
	authenticate,
	signIn,
	signUp,
	refresh,
};
