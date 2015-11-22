import route from 'koa-route';

class Routes {

  constructor(app) {

    const htmlPath = (app.env === 'development') ? 'jade' : 'html';

    app.use(route.get('/', function*() {
      // 这是首页
      this.body = yield this.render(htmlPath + '/index');
      this.status = 200;
    }));

    app.use(route.get('/contents', function*() {
      // 这个页面会书的序言和目录内容
      this.body = yield this.render(htmlPath + '/contents');
      this.status = 200;
    }));

    app.use(route.get('/download', function*() {
      // 这个页面是相关资源下载的入口
      this.body = yield this.render(htmlPath + '/download');
      this.status = 200;
    }));

    app.use(route.get('/corrections', function*() {
      // 这个页面是书的勘误
      this.body = yield this.render(htmlPath + '/corrections');
      this.status = 200;
    }));

    app.use(route.get('/about', function*() {
      // 这个页面是书的勘误
      this.body = yield this.render(htmlPath + '/about');
      this.status = 200;
    }));

    app.use(route.get('/images', function*() {
      // 这个页面会包含CoreOS的Box和Iso文件,以及Box文件的导入方法
      this.body = yield this.render(htmlPath + '/images');
      this.status = 200;
    }));

    app.use(route.get('/cos/introduction', function*() {
      // 这个页面会包含Cos系统的介绍和安装方法,以及试用版镜像的链接
      this.body = yield this.render(htmlPath + '/cos');
      this.status = 200;
    }));

    app.use(function *(next) {
      yield next;
      // 这个是默认路由
      if (this.body || !this.idempotent) return;
      this.body = yield this.render(htmlPath + '/404');
      this.status = 404;
    });

  }
}

export default Routes;