'use strict';

import React from 'react';
import MenuHeader from '../helpers/MenuHeader';
import MainStats from './MainStats';

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <MenuHeader />
        <div className="page">
          <MainStats />
        </div>
      </div>
    );
  }
}
