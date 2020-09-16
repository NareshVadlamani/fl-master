import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        //(for dev only)this should be reveresed once after attching API's
        !Cookies.get("JWT") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
