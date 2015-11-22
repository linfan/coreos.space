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

// Render config
const htmlMapper = (app.env === 'development')
  ? { map: { jade: 'jade' }, default: 'jade' }
  : { map: { html: 'swig' }, default: 'html' };

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
    console.log('%s %s %s %s %s %s',
      new Date().toISOString(),
      this.request.host,
      this.request.ip,
      this.request.method,
      this.request.url,
      this.response.status
    )
  }
});

// Render middleware
app.use(function *(next) {
  this.render = views('views', htmlMapper);
  yield next;
});

// Register routes
new Routes(app);

// Start app
const PORT = 3000;
app.listen(PORT);
console.log("Server started, listening on port: " + PORT);
