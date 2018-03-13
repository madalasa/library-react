import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './layout/AppLayout'

import {
  BrowserRouter as Router,
} from 'react-router-dom'

const Routes = () => (
  <Router>
     <AppLayout/>
  </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'));