import route from 'koa-route';

class Routes {
  constructor(app) {
    app.use(route.get('/', function*() {
      var content = "这是首页";
      this.body = yield this.render('index', {content: content});
      this.status = 200;
    }));

    app.use(route.get('/images/', function*() {
      var content = "这个页面会包含CoreOS的Box和Iso文件,以及Box文件的导入方法";
      this.body = yield this.render('index', {content: content});
      this.status = 200;
    }));

    app.use(route.get('/cos/introduction', function*() {
      var content = "这个页面会包含Cos系统的介绍和安装方法,以及试用版镜像的链接";
      this.body = yield this.render('index', {content: content});
      this.status = 200;
    }));

    app.use(route.get('/book/corrections', function*() {
      var content = "这个页面是书的勘误";
      this.body = yield this.render('index', {content: content});
      this.status = 200;
    }));

  }
}

module.exports = Routes;