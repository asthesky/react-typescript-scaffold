import * as React from 'react';
import { Switch } from "react-router";

import { Index } from './index/index';


// render react DOM
export default const App =() => (
  <Switch>
    <Route path="/" component={Index} />
  </Switch>
);

