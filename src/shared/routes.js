import React from 'react';
import App from '../components/App';
import LoginHandler from '../components/Login';
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var Routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

module.exports = Routes;
