import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

const styles = {

}
const TaskRow = ({task}) => {
  return (
    <div className='task-row'>
      <span className="task-info">
        <span className='title-row'>{task.title} </span>
        <span
          className={task.category == 'work' ? 'category-row-work' : 'category-row-home'}>
          {`(${task.category}) `}
        </span>
        <span className='date-row'>{`on ${task.date.toDateString()}`}</span>
      </span>
      <span className="control">
        <span className="remove">
          <Checkbox
            label="done?"
            labelPosition="left"

          />
        </span>
        <span className="remove">&times;</span>
      </span>
    </div>
  );
}

TaskRow.propTypes = {
};

export default TaskRow;
