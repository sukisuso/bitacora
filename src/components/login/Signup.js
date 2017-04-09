'use strict';

import React from 'react';

export default class Signup extends React.Component {
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
                        <input className="form-control" type="email" id="email" placeholder="Enter email" />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="username">User name</label>
                        <input className="form-control" type="text" id="username" placeholder="Enter username" />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="name">Name and Surnames</label>
                        <input className="form-control" type="text" id="name" placeholder="Enter name and surnames" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" placeholder="Enter password" />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="password2">Repeat password</label>
                        <input className="form-control" type="password" id="password" placeholder="Repeat password" />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="form-group">
                        <label for="phone">Phone number</label>
                        <input className="form-control" type="text" id="phone" placeholder="Enter phone number" />
                      </div>
                    </div>
                  </div>
                  <div className="row buttons">
                    <div className="col-xs-3 col-xs-offset-3">
                      <button className="btn btn-primary btn-block btn-large" type="button">Go back</button>
                    </div>
                    <div className="col-xs-3">
                      <button className="btn btn-primary btn-block btn-large" type="button">Create Account</button>
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
