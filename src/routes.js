import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Score from './pages/Score';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:id" exact component={Main} />
      <Route path="/score" exact component={Score} />
      <Route path="/" exact component={() => <Redirect to="/0" />} />
    </Switch>
  </BrowserRouter>
);

export default routes;
