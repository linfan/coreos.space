import React from 'react';
import RouteHandler from 'react-router';
import LoginHandler from '../components/Login.jsx';
import './routes.js'

class App extends React.Component {
  static render() {
    return (
      <div className="nav">
      <Link to="app">Home</Link> | <Link to="login">Login</Link>

      {/* this is the importTant part */}
      <RouteHandler/>
      </div>
    );
  }
}
