import React, {PropTypes} from 'react';
import jquery from 'jquery';

import Front from './Front';
import Back from './Back';
import SingleTaskRow from './TaskRow';


export default class Dashboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentView: true,
      tasks: [],
    }
  }

  addTask = (taskObject) => {
    const nextState = [...this.state.tasks, taskObject];
    this.setState({tasks: nextState})
  }

  removeTask = (id) => {
    const nextState = this.state.tasks.filter((task) => {
      return id !== task.id})
    this.setState({tasks: nextState})
  }

  toggleView = (e) => {
    jquery('.flip-container').toggleClass('active');
    if (this.state.currentView) {
      this.setState({currentView: false});
    } else {
      this.setState({currentView: true});
    }
  }

  render() {
    return (
      <div>
        <div className="flip-container">
          <div className="flipper">
            <Front
              toggleView={this.toggleView}
              currentView={this.state.currentView}
              tasks={this.state.tasks}
              addRemoveMethods={{
                add: this.addTask,
                remove: this.removeTask
              }}/>
            <Back
              toggleView={this.toggleView}
              currentView={this.state.currentView}
              tasks={this.state.tasks}
              addRemoveMethods={{
                add: this.addTask,
                remove: this.removeTask
              }}/>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
};
