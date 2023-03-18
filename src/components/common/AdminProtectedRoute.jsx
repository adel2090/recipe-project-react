import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import React from 'react'

//==============================================================
const AdminProtectedRoute = ({ component: Page, ...rest }) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? <Page {...props}></Page> : <Redirect to="/login"></Redirect>
      }
    ></Route>
  );
};

export default AdminProtectedRoute;


