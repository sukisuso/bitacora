'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: null,
      password: null,
      passwordRepeat: null,
      email: null,
      name: null,
      phone: null,
    };
  }

  goBack() {
    browserHistory.push('/');
  }

  changeField(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  handleChange() {
    if (!this.state || !this.state.password || !this.state.username
      || this.state.password !== this.state.passwordRepeat
      || !this.state.email || !this.state.name || !this.state.phone) {
      return;
    }

    this.props.action.userSignup(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="login-area">
          <div className="panel panel-default">
            <div className="panel-header">
              <p>Create a new account</p>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"
                          value={this.state.email} onChange={this.changeField.bind(this, 'email')} />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="username">User name</label>
                        <input className="form-control" type="text" id="username" placeholder="Enter username"
                          value={this.state.username} onChange={this.changeField.bind(this, 'username')} />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="name">Name and Surnames</label>
                        <input className="form-control" type="text" id="name" placeholder="Enter name and surnames"
                          value={this.state.name} onChange={this.changeField.bind(this, 'name')} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" placeholder="Enter password"
                          value={this.state.password} onChange={this.changeField.bind(this, 'password')} />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="password2">Repeat password</label>
                        <input className="form-control" type="password" id="password" placeholder="Repeat password"
                          value={this.state.passwordRepeat} onChange={this.changeField.bind(this, 'passwordRepeat')}/>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="phone">Phone number</label>
                        <input className="form-control" type="text" id="phone" placeholder="Enter phone number"
                          value={this.state.phone} onChange={this.changeField.bind(this, 'phone')}/>
                      </div>
                    </div>
                  </div>
                  <div className="row buttons">
                    <div className="col-xs-3 col-xs-offset-3">
                      <button className="btn btn-primary btn-block btn-large" type="button" onClick={()=> this.goBack()}>Go back</button>
                    </div>
                    <div className="col-xs-3">
                      <button className="btn btn-primary btn-block btn-large" type="button" onClick={()=> this.handleChange()}>Create Account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  if (state.userReducer.signup) {
    browserHistory.push('/');
  }

  return {
    signup: state.userReducer.signup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
