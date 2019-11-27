import React from 'react';
import {
 BrowserRouter, Switch, Route, Redirect 
} from 'react-router-dom';

import Menu from '../pages/Menu';
import Head from '../pages/Head';
import Main from '../pages/Main';
import Footer from '../pages/Footer';

const routes = () => (
  <BrowserRouter>
    <Menu component={Menu} />
    <Head component={Head} />
    <Switch>
      <Route path="/:id" exact component={Main} />
      <Route path="/" exact component={() => <Redirect to="/0" />} />
    </Switch>
    <Footer component={Footer} />
  </BrowserRouter>
);

export default routes;
