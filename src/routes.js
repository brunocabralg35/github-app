import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from './pages/Login';
import Profile from './pages/Profile';

function Routes() {

  return (
  <BrowserRouter>
    <Switch>

    <Route exact path="/profile/:id">
        <Profile />
    </Route>

    <Route exact path="/">
        <Login />
    </Route>

    </Switch>
  </BrowserRouter>
  )
}

export default Routes;
