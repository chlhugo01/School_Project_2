var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('/student/studenthome');
});
module.exports = router;
