const mongoArrayToObject = require('../../utils/mongoArrayToObject');
const CourseModel = require('../models/CourseModel');

class SiteController {
  // [get] /news
  index(req, res, next) {
    // read docs from db
    CourseModel.find({})
      .then(courses => {
        res.render('home', {
          courses: mongoArrayToObject(courses),
        });
      })
      .catch(next);
  }

  // [get] /news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
