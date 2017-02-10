import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main.js';

import './styles.css';

const App = ()=> (
  <MuiThemeProvider>
    <Main/>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
