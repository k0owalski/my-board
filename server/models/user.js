const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validate = require('../utils/validatation');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			trim: true,
			match: /^[a-zA-Z0-9_]+$/,
		},
		firstname: {
			type: String,
			trim: true,
			match: /^[a-zA-Z0-9_]+$/,
		},
		lastname: {
			type: String,
			trim: true,
			match: /^[a-zA-Z0-9_]+$/,
		},
	},
	{ timestamps: true }
);

userSchema.statics.signup = async function (email, password, repeatPassword) {
	if (!email || !password || !repeatPassword)
		return {
			success: false,
			_id: null,
			error: { field: null, message: 'All fields have to be filled.' },
		};

	if (!validate.isEmail(email))
		return {
			success: false,
			_id: null,
			error: { field: 'email', message: 'Invalid email.' },
		};

	if (!validate.isPassword(password))
		return {
			success: false,
			_id: null,
			error: { field: 'password', message: 'Password is not strong enough.' },
		};

	if (!validate.arePasswordsDifferent(password, repeatPassword))
		return {
			success: false,
			_id: null,
			error: { field: 'repeatPassword', message: "Password don't match." },
		};

	const doesExist = await this.findOne({ email }, {});

	if (doesExist)
		return {
			success: false,
			_id: null,
			error: { field: 'email', message: 'Email is already in use.' },
		};

	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash });

	return {
		success: true,
		_id: user._id,
		error: null,
	};
};

userSchema.statics.signin = async function (email, password) {
	if (!email || !password)
		return {
			success: false,
			_id: null,
			error: { field: null, message: 'All fields have to be filled.' },
		};

	if (!validate.isEmail(email) || !validate.isPassword(password))
		return {
			success: false,
			_id: null,
			error: { field: null, message: 'Invalid email or password.' },
		};

	const user = await this.findOne({ email });

	if (!user)
		return {
			success: false,
			_id: null,
			error: { field: null, message: 'Invalid email or password.' },
		};

	const doPasswordsMatch = await bcrypt.compare(password, user.password);

	if (!doPasswordsMatch)
		return {
			success: false,
			_id: null,
			error: { field: null, message: 'Invalid email or password.' },
		};

	return {
		success: true,
		_id: user._id,
		error: null,
	};
};

module.exports = mongoose.model('User', userSchema);
