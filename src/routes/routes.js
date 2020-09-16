import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Login from "../components/login/login";
import Container from "../components/Main/Main";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Container} />
        {/* <Route exact path="/select" component={Layout} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
