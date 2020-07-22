import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Notfound from './Notfound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />}/>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route component={Notfound} />
    </Switch>
  );
};

export default Routes;
