import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>

        <Route exact path="/profile/">
          <Redirect to="/"></Redirect>
        </Route>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
