import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import useBoards from 'utils/useBoards';

import Modal from 'templates/Modal/Modal';

import { setJoinBoard } from 'store/ui/ui.slice';
import { setBoards } from 'store/boards/boards.slice';

import StyledCreateBoardModal from './StyledJoinBoardModal';

const CreateBoardModal = () => {
  const ref = useRef();

  const dispatch = useDispatch();
  const { getBoards, joinBoard } = useBoards();

  const handleJoinCancel = () => dispatch(setJoinBoard({ isVisible: false }));

  const handleJoin = async () => {
    const { success } = await joinBoard(ref.current.value);

    if (!success) return;

    getBoards()
      .then(({ success: scs, boards: boardItems }) => {
        if (scs) dispatch(setBoards(boardItems));
      })
      .catch();

    dispatch(setJoinBoard(false));
  };

  return (
    <Modal
      successLabel="Join"
      cancelLabel="Cancel"
      handleSuccess={handleJoin}
      handleCancel={handleJoinCancel}
      actions
    >
      <StyledCreateBoardModal>
        <div className="main">
          <span className="title">Enter the board code</span>
          <input className="input" name="boardcode" id="boardcode" ref={ref} />
        </div>
      </StyledCreateBoardModal>
    </Modal>
  );
};

export default CreateBoardModal;
