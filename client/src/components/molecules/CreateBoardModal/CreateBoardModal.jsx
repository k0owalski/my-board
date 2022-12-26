import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import useBoards from 'utils/useBoards';

import Modal from 'templates/Modal/Modal';

import { setCreateBoard } from 'store/ui/ui.slice';
import { setBoards } from 'store/boards/boards.slice';

import StyledCreateBoardModal from './StyledCreateBoardModal';

const CreateBoardModal = () => {
  const ref = useRef();

  const dispatch = useDispatch();
  const { getBoards, createBoard } = useBoards();

  const handleCreateCancel = () =>
    dispatch(setCreateBoard({ isVisible: false }));

  const handleCreate = async () => {
    const { success } = await createBoard(ref.current.value);

    if (!success) return;

    getBoards()
      .then(({ success: scs, boards: boardItems }) => {
        if (scs) dispatch(setBoards(boardItems));
      })
      .catch();

    dispatch(setCreateBoard({ isVisible: false }));
  };

  return (
    <Modal
      successLabel="Create"
      cancelLabel="Cancel"
      handleSuccess={handleCreate}
      handleCancel={handleCreateCancel}
      actions
    >
      <StyledCreateBoardModal>
        <div className="main">
          <span className="title">Enter the board name</span>
          <input className="input" name="boardname" id="boardname" ref={ref} />
        </div>
      </StyledCreateBoardModal>
    </Modal>
  );
};

export default CreateBoardModal;
