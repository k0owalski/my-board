const EMAIL_REGEX =
	/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;

const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email);

const validatePassword = (password) => PASSWORD_REGEX.test(password);

const validatePasswordDifference = (password, passwordRepeated) =>
	password === passwordRepeated;

const validateSignUp = (email, password, passwordRepeated) => {
	const validation = { isValid: true, errors: [] };

	if (!email || !password || !passwordRepeated) {
		validation.errors.push('Some fields has been left empty.');
		validation.isValid = false;
		return validation;
	}

	if (!validateEmail(email)) validation.errors.push('Invalid email.');

	if (!validatePassword(password))
		validation.errors.push(
			'Invalid password. Correct password should contain min. 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.'
		);

	if (!validatePasswordDifference(password, passwordRepeated))
		validation.errors.push('Passwords are different.');

	if (validation.errors.length) validation.isValid = false;

	return validation;
};

const validateSignIn = (email, password) => {
	const validation = { isValid: true, errors: [] };

	if (!email || !password) {
		validation.errors.push('Some fields has been left empty.');
		validation.isValid = false;
		return validation;
	}

	if (!validateEmail(email) || !validatePassword(password))
		validation.errors.push('Invalid e-mail or password.');

	if (validation.errors.length) validation.isValid = false;

	return validation;
};

module.exports = {
	validateSignUp,
	validateSignIn,
};
