import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Repos from "./pages/Repos";
import Followers from "./pages/Followers";
import Following from "./pages/Following";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>

        <Route exact path="/repos/:username">
          <Repos />
        </Route>

        <Route exact path="/followers/:username">
          <Followers/>
        </Route>

        <Route exact path="/following/:username">
          <Following/>
        </Route>

        <Route exact path="/profile/">
          <Redirect to="/"></Redirect>
        </Route>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
