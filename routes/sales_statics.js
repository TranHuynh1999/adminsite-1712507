var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/morris.html', function(req, res, next) {
  res.render('sales_statics', { title: 'Thống kê doanh số' }); 
});
module.exports = router;
