import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import AddWidget from './AddWidget';
import TaskRow from './TaskRow';


export default class View extends React.Component {

  render() {
    return (
      <div className='front'>

        <div className="header">
          <h2>list of all tasks:</h2>
        </div>

        <div className="task-row-wrapper">
          <CSSTransitionGroup
            className='task'
            component='ul'
            transitionName='task'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {this.props.tasks.map((task) => {
              return <TaskRow
                task = {task}
                key = {task.id}
                stateChangeMethods = {this.props.stateChangeMethods}/>
            })}
          </CSSTransitionGroup>
        </div>

        <div className="footer">

          <div className="add-button">
            <AddWidget
              stateChangeMethods={this.props.stateChangeMethods}/>
            </div>

        </div>

      </div>
    );
  }
}

View.propTypes = {
};
