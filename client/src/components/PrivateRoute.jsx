import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { context } from "../utils/Context";
import ErrorPage from "./layouts/ErrorPage";

const PrivateRoute = ({ component: Component, onlyAdmin, ...props }) => {
  const { user } = useContext(context);
  console.log(user);
  console.log(onlyAdmin);
  if (onlyAdmin && !user.isAdmin)
    return <ErrorPage number={403} message={"Forbidden, only admin"} />;
  return (
    <Route
      {...props}
      render={innerProps => {
        return user.name ? (
          <Component {...innerProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
