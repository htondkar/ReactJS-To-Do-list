import React, {PropTypes} from 'react';

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const style ={
  borderRadius: 10,
}

const TaskRow = ({task, stateChangeMethods}) => {
  return (
    <div className={`task-row ${task.status}`}>
      <div className="task-info">
        {task.category === 'work' ?
          <FontIcon className="material-icons">work</FontIcon> :
          <FontIcon className="material-icons">home</FontIcon>}
        <span className='title-row'>{task.title} </span>
        <span
          className={task.category == 'work' ? 'category-row-work' : 'category-row-home'}>
          {`(${task.category}) `}
        </span>
        {task.status === 'done' ?
          <div className="show-status">
            <span>DONE</span>
            <FontIcon className="material-icons">done</FontIcon>
          </div> :
          <span className='date-row'>{`on ${task.date.toDateString()}`}</span>}
      </div>
      <div className="control">
        <IconMenu
           iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
           targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
           style={style}>
            <MenuItem
              primaryText={task.status === 'pending' ? 'mark as done' : 'mark as not done' }
              onClick={() => stateChangeMethods.changeStatus(task.id)}/>
            <MenuItem
              primaryText="remove task"
              onClick={() => stateChangeMethods.remove(task.id)}/>
        </IconMenu>
      </div>
    </div>
  );
}

TaskRow.propTypes = {
};

export default TaskRow;
