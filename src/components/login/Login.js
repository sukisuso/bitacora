'use strict';

import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Login extends React.Component {
  render() {
    function goLoginIn() {
      browserHistory.push('/main');
    }

    return (
      <div className="container">
        <div className="login">
          <h1>Bitácora</h1>
          <form method="post">
            <input type="text" name="u" placeholder="Username" required="required" />
            <input type="password" name="p" placeholder="Password" required="required" />
            <button onClick={goLoginIn} className="btn btn-primary btn-block btn-large" type="button">Let me in.</button>
            <p>Don't have an account yet? <Link key="NewAccount" to={'/signup'}>Create new account</Link></p>
          </form>
        </div>
      </div>
    );
  }
}
