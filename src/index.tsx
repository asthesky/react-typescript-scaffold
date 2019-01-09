import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Router } from "react-router";

import configureStore from "./store/index";
import createBrowserHistory from "./router/history";

import App from "./views/App";

// prepare store
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
