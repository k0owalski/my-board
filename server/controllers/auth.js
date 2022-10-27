const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const { validateSignIn, validateSignUp } = require('../utils/validatation');

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

	const { isValid, errors } = validateSignIn(email, password);

	if (!isValid) {
		res.json({ success: false, errors });
		return;
	}

	const userdata = await User.findOne({ email });

	if (!userdata) {
		errors.push('Invalid e-mail or password.');

		res.json({ success: false, errors });
		return;
	}

	const isPasswordValid = await bcrypt.compare(password, userdata.password);

	if (!isPasswordValid) {
		errors.push('Invalid e-mail or password.');

		res.json({ success: false, errors });
		return;
	}

	res.json({
		success: true,
		token: null,
		refresh: null,
	});
};

// sign-up
const signUp = async (req, res) => {
	const { email, password, passwordRepeated, username } = req.body;

	const { isValid, errors } = validateSignUp(email, password, passwordRepeated);

	if (!isValid) {
		res.json({ success: false, errors });
		return;
	}

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		errors.push(
			'There is already an account assaigned to this e-mail address.'
		);

		res.json({ success: false, errors });
		return;
	}

	try {
		const user = await User.create({
			email,
			password: bcrypt.hashSync(password),
			username,
		});

		// const token = jwt.sign(
		// 	{ id: user._id, email: user.email },
		// 	process.env.ACCESS_TOKEN_SECRET
		// );

		res.json({ success: true, token: null, refresh: null });
	} catch {
		errors.push('An error occured while creating new user.');

		res.json({ success: false, errors });
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
