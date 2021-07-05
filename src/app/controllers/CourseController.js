const mongoToObject = require('../../utils/mongoToObject');
const CourseModel = require('../models/CourseModel');

class CourseController {
  // [get] /course/:tag
  toDetail(req, res, next) {
    CourseModel.findOne({ tag: req.params.tag })
      .then(course => {
        res.render('course/detail', { course: mongoToObject(course) });
      })
      .catch(next);
  }

  create(req, res) {
    res.render('course/create');
  }
}

module.exports = new CourseController();
