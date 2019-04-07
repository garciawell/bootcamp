import React from "react";
import { Switch, Route } from "react-router-dom";
import Example from "../pages/Example";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
);

export default Routes;
