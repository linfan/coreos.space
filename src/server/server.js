"use strict";

// Dependencies
require ("babel/polyfill");
var React = require('react');
var koa = require('koa');
var co = require('co');
var Router = require("react-router");
//import koa_static from 'koa-static';
var views = require('co-views');
var Routes = require("../shared/routes");

// Server
const app = koa();

//app.use(koa_static(__dirname + '/public'));

// Logging middleware
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
  var that = this;

  var renderPromise = new Promise((resolve, reject) => {

    // Router
    Router.run(Routes, co.wrap(function* (Handler) {
        var content = React.renderToString(<Handler />);
        that.body = yield that.render('index', {content: content});
        that.status = 200;
        resolve(that.body)
    }));
  });

  return yield renderPromise

});

// Start app
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("Server started, listening on port: " + PORT);
