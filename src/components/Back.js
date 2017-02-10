import React, {PropTypes} from 'react';

import AddWidget from './AddWidget';
import ToggleView from './ToggleView';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class View extends React.Component {

  render() {
    return (
      <div className='back'>
        <div className="header">
          <Subheader>Tasks:</Subheader>
        </div>
        <div className="task-row-wrapper">
          <ul>
            {this.props.tasks.map((task) => {
              return `this will be tasks in categories`;
            })}
          </ul>
        </div>
        <div className="toggle-view">
          <ToggleView
            toggleView={this.props.toggleView}
            currentView={this.props.currentView}
          />
        </div>
        <div className="add-button">
          <AddWidget
              addRemoveMethods={this.props.addRemoveMethods}/>
        </div>
      </div>
    );
  }
}

View.propTypes = {
};
