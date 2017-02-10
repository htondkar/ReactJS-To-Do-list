import React, {PropTypes} from 'react';
import Dashboard from './Dashboard';
import injectTapEventPlugin from 'react-tap-event-plugin'


export default class Main extends React.Component {

  constructor(){
    super();
    injectTapEventPlugin();
  }

  render() {
    return (
      <div className="wrap">
        <div className="title">
          <h1>To-do list</h1>
        </div>
        <Dashboard/>
      </div>
    )
  }
}
