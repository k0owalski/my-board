import { useDispatch } from 'react-redux';

import { setCreateBoard, setJoinBoard } from 'store/ui/ui.slice';

import StyledNavBoardButtons from './StyledNavBoardButtons';

const NavBoardButtons = () => {
  const dispatch = useDispatch();

  const showCreateModal = () => dispatch(setCreateBoard({ isVisible: true }));
  const showJoinModal = () => dispatch(setJoinBoard({ isVisible: true }));

  return (
    <StyledNavBoardButtons>
      <button className="button" type="button" onClick={showJoinModal}>
        Join a board
      </button>
      <button
        className="button button--filled"
        type="button"
        onClick={showCreateModal}
      >
        A new board
      </button>
    </StyledNavBoardButtons>
  );
};

export default NavBoardButtons;
