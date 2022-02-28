import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/Home' component={Home}></Route>
    </Switch>
  );
}

export default Routes;