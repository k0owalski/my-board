import PropTypes from 'prop-types';
import StyledInput from './StyledInput';

const Input = ({ inputId, inputRef, label, type }) => {
  return (
    <StyledInput>
      <label className="label" htmlFor={inputId}>
        {label}
      </label>
      <input
        ref={inputRef}
        className="input"
        id={inputId}
        name={inputId}
        type={type}
      />
    </StyledInput>
  );
};

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
