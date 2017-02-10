import React, {PropTypes} from 'react';
import Dashboard from './Dashboard';



export default class Main extends React.Component {
  render() {
    return (
      <div className="wrap">
        <div className="title">
          <h1>To do list</h1>
        </div>
        <Dashboard/>
      </div>
    )
  }
}
