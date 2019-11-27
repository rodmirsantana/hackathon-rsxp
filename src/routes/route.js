import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from '../pages/Menu';
import Head from '../pages/Head';
import Main from '../pages/Main';
import Footer from '../pages/Footer';

const routes = () => (
  <BrowserRouter>
    <Menu component={Menu} />
    <Head component={Head} />
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
    <Footer component={Footer} />
  </BrowserRouter>
);

export default routes;
