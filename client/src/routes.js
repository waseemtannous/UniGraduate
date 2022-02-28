import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';

const Routes = () => {
  return (
    <Switch> {}
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/Home' component={Home}></Route>
    </Switch>
  );
}

export default Routes;