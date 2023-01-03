import { useDispatch, useSelector } from 'react-redux';

import { setInfo } from 'store/ui/ui.slice';

import StyledInfo from './StyledInfo';

const Info = () => {
  const { info } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleAnimationEnd = (event) => {
    if (event.animationName === 'slideOut')
      dispatch(setInfo({ isVisible: false, message: '', variant: 'info' }));
  };

  return info.isVisible ? (
    <StyledInfo
      variant={info.variant}
      isActive={info.isVisible}
      onAnimationEnd={handleAnimationEnd}
    >
      <span className="message">{info.message}</span>
    </StyledInfo>
  ) : null;
};

export default Info;
