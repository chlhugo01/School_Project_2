var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('index')
});
router.get('/teacher', function(req, res, next) {
  res.render('teacher/teacherhome');
});
router.get('/student', function(req, res, next) {
  res.render('student/studenthome');
});
module.exports = router;
