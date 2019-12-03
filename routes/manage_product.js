
  
  var express = require('express');
  var router = express.Router();
  
  /* GET home page. */
  router.get('/advanced_table.html', function(req, res, next) {
    res.render('manage_product', { title: 'Quản lý sản phẩm' });
  });
  module.exports = router;
  