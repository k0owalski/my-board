import { useSelector } from 'react-redux';

import Info from 'components/atoms/Info/Info';
import Form from 'components/organisms/SignInForm/SignInForm';

import StyledSignIn from './StyledSignIn';

const SignIn = () => {
  const { info } = useSelector((state) => state.ui);

  return (
    <StyledSignIn>
      <Form />
      <Info
        className={info.isVisible ? 'is-visible' : null}
        message={info.message}
        variant={info.variant}
      />
    </StyledSignIn>
  );
};

export default SignIn;
