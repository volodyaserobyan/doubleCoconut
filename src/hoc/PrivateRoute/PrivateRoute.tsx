import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return user ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signin" }} />
    );
  };
  return <Route {...rest} render={routeComponent} />;
};
