import { Link } from 'react-router-dom';
import StyledMyTaskList from './StyledMyTaskList';

const MyTaskList = () => {
  const tasks = [
    {
      checked: true,
      id: '1321',
      name: 'Commodo, imperdiet sit ultricies in bibendum faucibus viverra morbi eget turpis mauris',
      flag: { id: '1', name: "waiting for client's approval" },
    },
    {
      checked: false,
      id: '15423',
      name: 'Nisl odio urna mauris bibendum et',
      flag: null,
    },
  ];

  return (
    <StyledMyTaskList>
      {tasks?.map((task) => (
        <li className="task" key={task.id}>
          <button
            type="button"
            className={`task-button
            ${task.checked ? ' task-button--checked' : null}`}
          />
          <span className="task-id">#{task.id}</span>
          <Link className="task-link" to={`tasks/${task.id}`}>
            {task.name}
          </Link>
          {task.flag ? (
            <span className={`task-flag task-flag-${task.flag.id}`}>
              -- {task.flag.name}
            </span>
          ) : null}
        </li>
      ))}
    </StyledMyTaskList>
  );
};

export default MyTaskList;
