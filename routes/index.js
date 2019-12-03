var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/basic_table.html', function(req, res, next) {
  res.render('manage_account', { title: 'Quản lý tài khoản' });
});
router.get('/form_validation.html', function(req, res, next) {
  res.render('change_infor', { title: 'Thay đổi thông tin' });
});
router.get('/advanced_table.html', function(req, res, next) {
  res.render('manage_product', { title: 'Quản lý sản phẩm' });
});
router.get('/calendar.html', function(req, res, next) {
  res.render('manage_order', { title: 'Quản lý đơn hàng' });
});
router.get('/responsive_table.html', function(req, res, next) {
  res.render('manage_systemstall', { title: 'Quản lý hệ thống gian hàng' });
});
router.get('/pricing_table.html', function(req, res, next) {
  res.render('top_ten', { title: 'Top 10 sản phẩm ' }); 
});
router.get('/morris.html', function(req, res, next) {
  res.render('sales_statics', { title: 'Thống kê doanh số' }); 
});
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' }); 
});

module.exports = router;
