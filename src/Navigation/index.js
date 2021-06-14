import React from "react";
import {
  Route,
  Switch
  //Redirect
} from "react-router-dom";

import Login from "../Containers/LoginContainer";
import Register from "../Containers/RegisterContainer";
import DefaultLayout from "../Containers/DefaultLayoutContainer/defaultLayout";

function AppNavigator() {
  return (
    <Switch>
      <Route path="/login" name="Login" component={Login} />
      <Route path="/register" name="Register" component={Register} />
      <Route path="/" name="DefaultLayout" component={DefaultLayout} />
    </Switch>
  );
}
export default AppNavigator;
