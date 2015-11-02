// Dependencies
import "babel/polyfill";
import React from 'react';
import koa from 'koa';
import co from 'co';
import Router from "react-router";
import koa_static from 'koa-static';
import views from 'co-views';
import Routes from "../shared/routes";

// Server object
const app = koa();

// Serve static file
app.use(koa_static('dist'));

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

// Serve html request
app.use(function*(next) {
  var requestPath = this.request.path;
  if(!requestPath.includes('.js')) {
    var that = this;
    var renderPromise = new Promise((resolve, reject) => {
      // React router
      Router.run(Routes, co.wrap(function* (Handler) {
        var content = React.renderToString(<Handler />);
        that.body = yield that.render('index', {content: content});
        that.status = 200;
        resolve(that.body)
      }));
    });
  }

  return yield renderPromise
});

// Start app
const PORT = 3000;
app.listen(PORT);
console.log("Server started, listening on port: " + PORT);
