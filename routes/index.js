var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/teacher', function(req, res, next) {
  res.render('teacherhome');
});
router.get('/student', function(req, res, next) {
  res.render('studenthome');
});
module.exports = router;
