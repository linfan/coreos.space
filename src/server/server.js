"use strict";

// Dependencies
var React = require('react');
var koa = require('koa');
var Router = require("react-router");
var koa_static = require('koa-static');
var views = require('co-views');
require("babel/register");

// Server
const app = koa();

app.use(koa_static(__dirname + '/public'));

// Logging
app.use(function*(next) {
  try {
    yield next
  } finally {
    console.log('%s %s %s %s',
      new Date().toISOString(),
      this.request.method,
      this.request.url,
      this.response.status
    )
  }
});

// Jade middleware
app.use(function*(next) {
  this.render = views('views', {
    map: {jade: 'jade'},
    default: 'jade'
  });
  yield next;
});

app.use(function*(next) {
  let Login = require('../components/Login');
  let content = React.renderToString(<Login />);
  this.body = yield this.render('index', {content: content});
  this.status = 200;
});

// Start app
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("Server started, listening on port: " + PORT);
