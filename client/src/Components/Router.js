import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarContainer from './Calendar';
import DayContainer from './Day/DayContainer';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/calendar" component={CalendarContainer}></Route>
        <Route exact path="/calendar/:date" component={DayContainer}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
