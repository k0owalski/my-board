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
		throw new validate.exception(null, 'All fields have to be filled.');

	if (!validate.isEmail(email))
		throw new validate.exception('email', 'Invalid email.');

	if (!validate.isPassword(password))
		throw new validate.exception('password', 'Password is not strong enough.');

	if (!validate.arePasswordsDifferent(password, repeatPassword))
		throw new validate.exception('repeatPassword', 'Passwords do not match.');

	const exists = await this.findOne({ email }, {});

	if (exists) throw new validate.exception('email', 'Email is already in use.');

	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash });

	return user;
};

userSchema.statics.signin = async function (email, password) {
	if (!email || !password)
		throw new validate.exception(null, 'All fields have to be filled.');

	if (!validate.isEmail(email) || !validate.isPassword(password))
		throw new validate.exception(null, 'Invalid email or password.');

	const user = await this.findOne({ email }, {});

	if (!user) throw new validate.exception(null, 'Invalid email or password.');

	const doPasswordsMatch = await bcrypt.compare(password, user.password);

	if (!doPasswordsMatch)
		throw new validate.exception(null, 'Invalid email or password.');

	return user;
};

module.exports = mongoose.model('User', userSchema);
