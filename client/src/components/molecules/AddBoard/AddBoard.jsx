import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import useBoards from 'utils/useBoards';

import Modal from 'templates/Modal/Modal';

import { setCreateBoardVisible, setJoinBoardVisible } from 'store/ui/ui.slice';
import { setBoards } from 'store/boards/boards.slice';

import StyledAddBoard from './StyledAddBoard';

const AddBoard = ({ title, action }) => {
  const ref = useRef();

  const dispatch = useDispatch();
  const { getBoards, createBoard, joinBoard } = useBoards();

  const handleCreateCancel = () => dispatch(setCreateBoardVisible(false));

  const handleJoinCancel = () => dispatch(setJoinBoardVisible(false));

  const handleCreate = async () => {
    const { success } = await createBoard(ref.current.value);

    if (!success) return;

    getBoards()
      .then(({ success: scs, boards: boardItems }) => {
        if (scs) dispatch(setBoards(boardItems));
      })
      .catch();

    dispatch(setCreateBoardVisible(false));
  };

  const handleJoin = async () => {
    const { success } = await joinBoard(ref.current.value);

    if (!success) return;

    getBoards()
      .then(({ success: scs, boards: boardItems }) => {
        if (scs) dispatch(setBoards(boardItems));
      })
      .catch();

    dispatch(setJoinBoardVisible(false));
  };

  return (
    <Modal
      successLabel="OK"
      cancelLabel="Cancel"
      handleSuccess={action === 'create' ? handleCreate : handleJoin}
      handleCancel={action === 'create' ? handleCreateCancel : handleJoinCancel}
      actions
    >
      <StyledAddBoard>
        <div className="main">
          <span className="title">{title}</span>
          <input className="input" name="boardname" id="boardname" ref={ref} />
        </div>
      </StyledAddBoard>
    </Modal>
  );
};

AddBoard.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.oneOf(['create', 'join']).isRequired,
};

export default AddBoard;
