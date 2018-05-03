import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return <div>Welcome to React Boilerplate App - {this.props.project} - <Link to="/page1">Page 1</Link></div>;
  }
}

const mapStateToProps = (state) => {
    return state.firstReducer
}
export default connect(mapStateToProps)(App);