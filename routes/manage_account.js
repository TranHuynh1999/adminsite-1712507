var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/basic_table.html', function(req, res, next) {
  res.render('manage_account', { title: 'Quản lý tài khoản' });
});

module.exports = router;
