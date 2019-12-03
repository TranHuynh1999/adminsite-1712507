var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/calendar.html', function(req, res, next) {
  res.render('manage_order', { title: 'Quản lý đơn hàng' });
});
module.exports = router;
