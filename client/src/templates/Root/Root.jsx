import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Info from 'components/atoms/Info/Info';
import Navbar from 'components/organisms/Navbar/Navbar';

const Root = ({ children }) => {
  const { info } = useSelector((state) => state.ui);

  return (
    <>
      <Navbar />
      {children}
      <Info
        className={info.isVisible ? 'is-active' : null}
        message={info.message}
        variant={info.variant}
      />
    </>
  );
};

Root.propTypes = {
  children: PropTypes.element,
};

Root.defaultProps = {
  children: null,
};

export default Root;
