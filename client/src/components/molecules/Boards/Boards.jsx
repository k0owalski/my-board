import { NavLink } from 'react-router-dom';

import IconButton from 'components/atoms/IconButton/IconButton';

import settingsIcon from 'assets/images/icon-settings.svg';
import deleteIcon from 'assets/images/icon-delete.svg';

import useBoardNameToURI from 'utils/useBoardNameToURI';

import StyledBoards from './StyledBoards';

const Boards = () => {
  const boardArr = [
    { id: 79837123, name: 'My first created board' },
    { id: 29350120, name: 'My second board' },
    { id: 54251955, name: 'And the third one' },
  ];

  const getBoardURI = useBoardNameToURI();

  return (
    <StyledBoards>
      {boardArr.map(({ id, name }) => (
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
