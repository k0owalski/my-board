const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validate = require('../utils/validatation');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'Please enter an email.'],
			unique: true,
			match: [
				/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/,
				'Please enter a valid email.',
			],
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter a password.'],
			minlength: [8, 'The minimum password length is 8 characters.'],
			match: [
				/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
				'Password has to include at least 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character.',
			],
		},
		username: {
			type: String,
			trim: true,
			match: [/^[a-zA-Z0-9_]+$/, 'Please enter a valid username.'],
		},
		firstname: {
			type: String,
			trim: true,
			match: [/^[a-zA-Z_]+$/, 'Please enter a valid firstname.'],
		},
		lastname: {
			type: String,
			trim: true,
			match: [/^[a-zA-Z_]+$/, 'Please enter a valid lastname.'],
		},
	},
	{ timestamps: true }
);

userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(this.password ?? '', salt);

	this.password = hash;

	next();
});

userSchema.statics.signup = async function (email, password, repeatPassword) {
	if (!validate.arePasswordsDifferent(password, repeatPassword))
		return {
			success: false,
			_id: null,
			error: { path: 'repeatPassword', message: 'Password does not match.' },
		};

	try {
		const user = await this.create({ email, password });

		return {
			success: true,
			_id: user._id,
			error: null,
		};
	} catch (err) {
		if (err.code === 11000)
			return {
				success: false,
				_id: null,
				error: {
					path: 'email',
					message: 'Given email is already in use.',
				},
			};

		return {
			success: false,
			_id: null,
			error: {
				path: Object.values(err.errors)[0].path,
				message: Object.values(err.errors)[0].message,
			},
		};
	}
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

const User = mongoose.model('User', userSchema);

module.exports = User;
