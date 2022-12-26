import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Info from 'components/atoms/Info/Info';
import CreateBoardModal from 'components/molecules/CreateBoardModal/CreateBoardModal';
import JoinBoardModal from 'components/molecules/JoinBoardModal/JoinBoardModal';
import Navbar from 'components/organisms/Navbar/Navbar';

const Root = ({ children }) => {
  const { info, createBoard, joinBoard } = useSelector((state) => state.ui);

  return (
    <>
      <Navbar />
      {children}
      <Info
        className={info.isVisible ? 'is-active' : null}
        message={info.message}
        variant={info.variant}
      />
      {createBoard.isVisible ? <CreateBoardModal /> : null}
      {joinBoard.isVisible ? <JoinBoardModal /> : null}
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
