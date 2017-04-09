import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
import GridComponent from './components/GridComponent';

import Login from './components/login/Login';
import Main from './components/main/Main';
import Signup from './components/login/Signup';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Login} />
    <Route path="main" component={Main} />
    <Route path="grid" component={GridComponent} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;