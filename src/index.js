import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import MainRoute from './routes';

ReactDOM.render(
  <Provider store={store}>
      <MainRoute />
  </Provider>,
  document.getElementById("root")
);
