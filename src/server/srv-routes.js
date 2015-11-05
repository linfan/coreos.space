import route from 'koa-route';

class Routes {
  constructor(app) {
    app.use(route.get('/:name', function*(name) {
      var content = "Hello " + name;
      this.body = yield this.render('index', {content: content});
      this.status = 200;
    }));
  }
}

module.exports = Routes;