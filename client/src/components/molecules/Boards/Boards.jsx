import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setBoards } from 'store/boards/boards.slice';

import IconButton from 'components/atoms/IconButton/IconButton';

import settingsIcon from 'assets/images/icon-settings.svg';
import deleteIcon from 'assets/images/icon-delete.svg';

import useBoardNameToURI from 'utils/useBoardNameToURI';

import StyledBoards from './StyledBoards';

const Boards = () => {
  const {
    boards: { items },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const getBoardURI = useBoardNameToURI();

  useEffect(() => {
    if (!items) dispatch(setBoards());
  }, []);

  return (
    <StyledBoards>
      {items?.map(({ id, name }) => (
        <li className="board-name" key={id}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'board-name-button is-active' : 'board-name-button'
            }
            to={`/boards/${id}/${getBoardURI(name)}`}
          >
            {name}
          </NavLink>
          <div className="controlls">
            <IconButton icon={settingsIcon} size="small" />
            <IconButton icon={deleteIcon} size="small" />
          </div>
        </li>
      ))}
    </StyledBoards>
  );
};

export default Boards;
