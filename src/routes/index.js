const newsRouter = require('./news');
const siteRounter = require('./site');
const errorRouter = require('./error');
const courseRounter = require('./course');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/course', courseRounter);
  app.use('/', siteRounter);
  app.use(errorRouter);
}

module.exports = route;
