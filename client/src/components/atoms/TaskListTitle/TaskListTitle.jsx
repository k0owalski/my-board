import PropTypes from 'prop-types';

import StyledTaskListTitle from './StyledTaskListTitle';

const TaskListTitle = ({ title }) => (
  <StyledTaskListTitle>
    <span className="title">{title}</span>
  </StyledTaskListTitle>
);

TaskListTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskListTitle;
