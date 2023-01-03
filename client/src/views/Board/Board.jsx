import TaskListTitle from 'components/atoms/TaskListTitle/TaskListTitle';
import MyTaskList from 'components/molecules/MyTaskList/MyTaskList';
import Root from 'templates/Root/Root';

import StyledBoard from './StyledBoard';

const Board = () => (
  <Root>
    <StyledBoard>
      <TaskListTitle title="Your tasks" />
      <MyTaskList />
    </StyledBoard>
  </Root>
);

export default Board;
