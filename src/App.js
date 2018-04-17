import React, { Component } from "react";
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return <div>Welcome to React Boilerplate App - {this.props.project}</div>;
  }
}

const mapStateToProps = (state) => {
    return state.firstReducer
}
export default connect(mapStateToProps)(App);