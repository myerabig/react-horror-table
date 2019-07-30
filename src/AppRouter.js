import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import App from './App/App';
import Profile from './Profile';
import NotFound from './NotFound';

function AppRouter() {
  return (
    <div className='AppRouter'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <PrivateRoute path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
