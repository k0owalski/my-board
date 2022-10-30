import PropTypes from 'prop-types';

import StyledSteps from './StyledSteps';

const Steps = ({ count, current, setCurrent }) => {
  const stepArr = [];

  for (let i = 0; i < count; i++) {
    stepArr.push(
      <button
        className={`step ${i === current && 'is-active'}`}
        key={i}
        type="button"
        onClick={() => i !== current && setCurrent(i)}
      />
    );
  }

  return <StyledSteps count={count}>{stepArr}</StyledSteps>;
};

Steps.propTypes = {
  count: PropTypes.number,
  current: PropTypes.number,
  setCurrent: PropTypes.func,
};

Steps.defaultProps = {
  count: 2,
  current: 0,
  setCurrent: null,
};

export default Steps;
