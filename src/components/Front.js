import React, {PropTypes} from 'react';

import AddWidget from './AddWidget';
import ToggleView from './ToggleView';
import TaskRow from './TaskRow';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class View extends React.Component {

  render() {
    return (
      <div className='front'>

        <div className="header">
          <h2>list of all tasks:</h2>
        </div>

        <div className="task-row-wrapper">
          <ul>
            {this.props.tasks.map((task) => {
              return <TaskRow
                task = {task}
                key = {task.id}
                stateChangeMethods = {this.props.stateChangeMethods}/>
            })}
          </ul>
        </div>

        <div className="footer">

          <div className="toggle-view">
            <ToggleView
              toggleView={this.props.toggleView}
              currentView={this.props.currentView}
            />
          </div>

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
