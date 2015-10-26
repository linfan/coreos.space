import React from 'react';
import { Link, RouteHandler } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link> | <Link to="login">Login</Link>

        {/* this is the importTant part */}
        <RouteHandler />
      </div>
    );
  }
}

module.exports = App;