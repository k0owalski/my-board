const EMAIL_REGEX =
	/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;

const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;

const validateEmail = (email) => EMAIL_REGEX.test(email);

const validatePassword = (password) => PASSWORD_REGEX.test(password);

const validatePasswordDifference = (password, repeatPassword) =>
	password === repeatPassword;

const validate = {
	isEmail: validateEmail,
	isPassword: validatePassword,
	arePasswordsDifferent: validatePasswordDifference,
};

module.exports = validate;
