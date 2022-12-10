import { useSelector } from 'react-redux';

import Info from 'components/atoms/Info/Info';
import Form from 'components/organisms/SignUpForm/SignUpForm';

import StyledSignUp from 'views/SignUp/StyledSignUp';

const SignUp = () => {
  const { info } = useSelector((state) => state.ui);

  return (
    <StyledSignUp>
      <Form />
      <Info
        message={info.message}
        variant={info.variant}
        isActive={info.isVisible}
      />
    </StyledSignUp>
  );
};

export default SignUp;
