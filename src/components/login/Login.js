'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: null,
      password: null,
    };
  }

  handleChange() {
    if (!this.state || !this.state.password || !this.state.username ) {
      return;
    }

    this.props.action.userLogin(this.state.username, this.state.password);
  }

  changeField(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    if (this.props.token) {
      browserHistory.push('/main');
    }

    return (
      <div className="container">
        <div className="login">
          <h1>Bitácora</h1>
          <form method="post">
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeField.bind(this, 'username')} />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeField.bind(this, 'password')} />
            <p>{ this.props.error ? 'Error incorrect username or password' : '' }</p>
            <button onClick={()=> this.handleChange()} className="btn btn-primary btn-block btn-large" type="button">Let me in.</button>
            <p>Don't have an account yet? <Link key="NewAccount" to={'/signup'}>Create new account</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.userReducer.token,
    error: state.userReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
