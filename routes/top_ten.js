var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pricing_table.html', function(req, res, next) {
  res.render('top_ten', { title: 'Top 10 sản phẩm ' }); 
});
module.exports = router;
