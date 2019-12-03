var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/basic_table.html',require('./routes/manage_account') );
app.use('/form_validation.html',require('./routes/change_infor') );
app.use('/advanced_table.html',require('./routes/manage_product') );
app.use('/calendar.html',require('./routes/manage_order') );
app.use('/responsive_table.html',require('./routes/manage_systemstall') );
app.use('/pricing_table.html',require('./routes/top_ten') );
app.use('/morris.html',require('./routes/sales_statics') );
app.use('/index.html', require('./routes/index'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
