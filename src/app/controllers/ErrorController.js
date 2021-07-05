class ErrorController {
  // 404 catch all handler
  handle404(req, res, next) {
    res.status(404);
    res.send('404')
  }

  // 500 error handler
  handle500(err, req, res, next) {
    console.error(err.stack);
    res.status(500)
    res.send('500');
  }

}

module.exports = new ErrorController;