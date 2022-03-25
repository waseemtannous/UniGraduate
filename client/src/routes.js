import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CalendarBuilder from './components/CalendarBuilder/CalendarBuilder';
import Grades from './components/Grades/Grades';
import Courses from './components/Courses/Courses';
import Lecturers from './components/Lecturers/Lecturers';
import Teachers from './components/Teachers/Teachers';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/CalendarBuilder' component={CalendarBuilder}></Route>
      <Route exact path='/Grades' component={Grades}></Route>
      <Route exact path='/Courses' component={Courses}></Route>
      <Route exact path='/Lecturers' component={Lecturers}></Route>
      <Route exact path='/Teachers' component={Teachers}></Route>
    </Switch>
  );
}

export default Routes;