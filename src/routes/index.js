import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App";
import Page1 from "../components/Page1";

export default class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/page1" component={Page1} />
        </Switch>
      </Router>
    );
  }
}
