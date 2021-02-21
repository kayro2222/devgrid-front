import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
