import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';
import Store from '../store';

const storeInstance = Store({
  token: null,
});

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Provider store={storeInstance}>
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
      </Provider>
    );
  }
}
