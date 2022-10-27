const EMAIL_REGEX =
  /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const useValidation = {
  validateEmail: (email) => EMAIL_REGEX.test(email),
  validatePassword: (password) => PASSWORD_REGEX.test(password),
  validateRepeatedPassword: (repeated, password) => repeated === password,
};

export const { validateEmail, validatePassword, validateRepeatedPassword } =
  useValidation;

export default useValidation;
