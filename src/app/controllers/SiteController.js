const CourseModel = require('../models/CourseModel');

class SiteController {
  // [get] /news
  index(req, res, next) {
    // read docs from db
    // promise way
    CourseModel.find({})
      .then(courses => {
        res.render('home', { courses: courses.map(course => course.toObject()) });
      })
      .catch(next);
  }

  // [get] /news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
