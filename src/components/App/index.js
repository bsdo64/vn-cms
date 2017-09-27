import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import cx from 'classnames';

import 'normalize.css/normalize.css';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!./dashboard.css';

import NavMain from '../NavMain.js';
import Content from '../Content.js';

const App = () => (
  <Router>
    <div>
      <NavMain />
      <Content />
    </div>
  </Router>
);

export default App;