import React, {
  Component,
} from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import style from './LoginPage.css';

class LoginPage extends Component {
  state = {
    loginId: null,
    loginPassword: null,
  };

  changeIdPass = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  requestLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(this.state);

    if (this.state.loginId && this.state.loginPassword) {
      this.props.requestLogin(this.state);
    }
  };

  render() {
    return (
      <div className="container">

        <form className={style['form-signin']} onSubmit={this.requestLogin}>
          <h2 className={style['form-signin-heading']}>Login</h2>
          <label htmlFor="loginId" className="sr-only">Email address</label>
          <input type="email" id="loginId"
                 className={cx(style['form-control'], 'form-control')} placeholder="Id"
                 required="" autoFocus=""
                 onChange={this.changeIdPass} />
          <label htmlFor="loginPassword" className="sr-only">Password</label>
          <input type="password" id="loginPassword"
                 className={cx(style['form-control'], 'form-control')} placeholder="Password"
                 required=""
                 onChange={this.changeIdPass} />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>
        </form>

      </div>
    );
  }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.UI.Auth
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestLogin: (payload) => dispatch({type: 'REQUEST_LOGIN', payload})
  }
};

export default LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);
