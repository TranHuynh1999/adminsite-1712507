var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/form_validation.html', function(req, res, next) {
  res.render('change_infor', { title: 'Thay đổi thông tin' });
});

module.exports = router;
