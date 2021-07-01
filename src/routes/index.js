const newsRouter = require('./news');
const siteRounter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRounter);
}

module.exports = route;
