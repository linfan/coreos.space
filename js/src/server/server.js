// Dependencies
import 'babel-polyfill'
import koa from 'koa'
import co from 'co'
import koa_static from 'koa-static'
import views from 'co-views'
import Routes from './srv-routes.js'
import Util from './util.js'

// Server object
const app = koa();

// Serve static file
app.use(koa_static('js/3rd'));
app.use(koa_static('js/dist/client'));
app.use(koa_static('style/3rd'));
app.use(koa_static('style/css'));
app.use(koa_static('img'));

// Logging middleware
app.use(function *(next) {
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
app.use(function *(next) {
  this.render = views('views', {
    map: { html: 'swig' },
    default: 'html'
  });
  yield next;
});

// Register routes
new Routes(app);

app.use(function *(next) {
  yield next;
  if (this.body || !this.idempotent) return;
  this.body = yield this.render('html/404');
  this.status = 404;
});

// Start app
const PORT = 3000;
app.listen(PORT);
console.log("Server started, listening on port: " + PORT);
