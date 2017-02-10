import React, {PropTypes} from 'react';
import jquery from 'jquery';

import Front from './Front';

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

  changeStatus = (id) => {
    const nextState = this.state.tasks.map((task)=>{
      if (id == task.id) {
        if (task.status === 'pending') {
          task.status = 'done';
          return task;
        } else {
          task.status = 'pending';
          return task;
        }
      } else {
        return task;
      }
    });
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
              stateChangeMethods={{
                add: this.addTask,
                remove: this.removeTask,
                changeStatus: this.changeStatus
              }}/>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
};
