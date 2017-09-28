import React from 'react';

import 'normalize.css/normalize.css';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!./dashboard.css';

import NavMain from '../NavMain.js';
import Content from '../Content.js';

const App = () => (
  <div>

    <div>
      <NavMain />
      <Content />
    </div>
  </div>
);

export default App;