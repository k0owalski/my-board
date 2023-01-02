import Info from 'components/atoms/Info/Info';
import Form from 'components/organisms/SignUpForm/SignUpForm';

import StyledSignUp from 'views/SignUp/StyledSignUp';

const SignUp = () => {
  return (
    <StyledSignUp>
      <Form />
      <Info />
    </StyledSignUp>
  );
};

export default SignUp;
