import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setBoards } from 'store/boards/boards.slice';

import IconButton from 'components/atoms/IconButton/IconButton';

import useBoards from 'utils/useBoards';

import settingsIcon from 'assets/images/icon-settings.svg';

import StyledBoards from './StyledBoards';

const Boards = () => {
  const { boards } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { getBoards, boardNameToURI } = useBoards();

  useEffect(() => {
    getBoards()
      .then(({ success, boards: boardItems }) => {
        if (success) dispatch(setBoards(boardItems));
      })
      .catch();
  }, []);

  return (
    <StyledBoards>
      {boards?.map(({ _id, name }) => (
        <li className="board-name" key={_id}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'board-name-button is-active' : 'board-name-button'
            }
            to={`/boards/${_id}/${boardNameToURI(name)}`}
          >
            {name}
          </NavLink>
          <div className="controlls">
            <IconButton
              path={`/boards/${_id}/${boardNameToURI(name)}/settings`}
              icon={settingsIcon}
              size="small"
            />
          </div>
        </li>
      ))}
    </StyledBoards>
  );
};

export default Boards;
