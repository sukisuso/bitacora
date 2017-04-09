'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class MenuHeader extends React.Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><Link key="home" to={'/main'}>Home</Link></li>
            <li><Link key="NewAccount" to={'/grid'}>Bitácora</Link></li>
            <li><Link key="NewAccount" to={'/grid'}>Orders</Link></li>
            <li><Link key="NewAccount" to={'/grid'}>Stock</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link key="closeSession" to={'/'}>Close</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
