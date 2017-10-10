import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap';
import 'normalize.css/normalize.css';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!./dashboard.css';

import NavMain from '../NavMain.js';
import Content from '../Content.js';
import LoginPage from '../LoginPage.js';

class App extends Component {

  render() {

    const { auth } = this.props;

    if (auth && auth.get('inputEmail')) {
      return (
          <div>
            <NavMain />
            <Content />
          </div>
      )
    } else {
      return (
          <LoginPage />
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    auth: state.UI.get('Auth')
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

export default App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);