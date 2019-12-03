  
  var express = require('express');
  var router = express.Router();
  
  /* GET home page. */
  router.get('/responsive_table.html', function(req, res, next) {
    res.render('manage_systemstall', { title: 'Quản lý hệ thống gian hàng' });
  });
  module.exports = router;
  