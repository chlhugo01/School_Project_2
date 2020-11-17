var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRoutes = require('./routes/index');
var teacherRoutes = require('./routes/student');
var studentRoutes = require('./routes/teacher');

var app = express();
const port=5000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use("/teacher",teacherRoutes);
app.use("/student",studentRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;
