import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import 'normalize.css/normalize.css';
import style from './index.css';

import NavMain from '../NavMain.js';
import Content from '../Content.js';

const App = () => (
  <Router>
    <div className={style.container}>
      <NavMain />
      <Content />
    </div>
  </Router>
);

export default App;