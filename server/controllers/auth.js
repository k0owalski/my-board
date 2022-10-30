const User = require('../models/user');
const createAccessToken = require('../utils/createAccessToken');
const verifyToken = require('../utils/verifyToken');

// authenticate
const authenticate = (req, res) => {
	const token = req.cookies?.token;

	const _id = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	const user = User.findOne({ _id });

	if (user) res.status(200).send();
	else res.status(401).send();
};

// sign-in
const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.signin(email, password);

		const { token, refreshToken } = createAccessToken(user._id);

		res
			.status(200)
			.cookie('token', token, { maxAge: 360000 * 24 * 2, httpOnly: true })
			.json({ refreshToken });
	} catch (error) {
		res.status(400).json({ error });
	}
};

// sign-up
const signUp = async (req, res) => {
	const { email, password, repeatPassword } = req.body;

	try {
		const user = await User.signup(email, password, repeatPassword);

		const { token, refreshToken } = createAccessToken(user._id);

		res
			.status(200)
			.cookie('token', token, { maxAge: 360000 * 24 * 2, httpOnly: true })
			.json({ refreshToken });
	} catch (error) {
		res.status(400).json({ error });
	}
};

// refresh
const refreshToken = (req, res) => {
	const { refreshToken: refresh } = req.body;

	const id = verifyToken(refresh, process.env.REFRESH_TOKEN_SECRET);

	if (id) {
		const { token, refreshToken } = createAccessToken(id);

		res
			.status(200)
			.cookie('token', token, { maxAge: 360000 * 24 * 2, httpOnly: true })
			.json({ refreshToken });

		return;
	}

	res.status(400).send();
};

module.exports = {
	authenticate,
	signIn,
	signUp,
	refreshToken,
};
