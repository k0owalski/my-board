import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ModalActions from 'components/molecules/ModalActions/ModalActions';

import Modal from 'templates/Modal/Modal';

import { setCreateBoardVisible, setJoinBoardVisible } from 'store/ui/ui.slice';
import StyledAddBoard from './StyledAddBoard';

const AddBoard = ({ title, action }) => {
  const dispatch = useDispatch();

  const handleCreateCancel = () => dispatch(setCreateBoardVisible(false));

  const handleJoinCancel = () => dispatch(setJoinBoardVisible(false));

  const handleCreate = () => null;

  const handleJoin = () => null;

  return (
    <Modal>
      <StyledAddBoard>
        <div className="main">
          <span className="title">{title}</span>
          <input
            className="input"
            name="boardname"
            id="boardname"
            placeholder="My new board"
          />
        </div>
        <ModalActions
          handleSuccess={action === 'create' ? handleCreate : handleJoin}
          handleCancel={
            action === 'create' ? handleCreateCancel : handleJoinCancel
          }
        />
      </StyledAddBoard>
    </Modal>
  );
};

AddBoard.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.oneOf(['create', 'join']).isRequired,
};

export default AddBoard;
