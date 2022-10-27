const User = require('../models/user');
const createAccessToken = require('../utils/createAccessToken');

// authenticate
const authenticate = (req, res) => {
	const { token } = req.body;

	if (!token || token === 'null') {
		res.json({ success: false });
		return;
	}

	res.json({ success: true });
};

// sign-in
const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.signin(email, password);

		const token = createAccessToken(user._id);

		res.status(200).json({ token });
	} catch (error) {
		res.status(400).json({ error });
	}
};

// sign-up
const signUp = async (req, res) => {
	const { email, password, repeatPassword } = req.body;

	try {
		const user = await User.signup(email, password, repeatPassword);

		const token = createAccessToken(user._id);

		res.status(200).json({ token });
	} catch (error) {
		res.status(400).json({ error });
	}
};

// refresh
const refreshToken = (req, res) => {
	const { refresh } = req.body;
	console.log(refresh);

	res.json({
		success: true,
		token: 'f98j213jf1jj3ahsd9.1u92j3h92h13fh180h3f.jamdj8dha0hh12312h3g',
		refresh: 'nv12yni3ho12h490.an7dvnayy2y1g31gjkgfh3y5.ay9vsyb8a7tf4y132',
	});
};

module.exports = {
	authenticate,
	signIn,
	signUp,
	refreshToken,
};
