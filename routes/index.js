var express = require('express');
var router = express.Router();
var indexController=require('../controllers/index.troller');

/* GET home page. */
router.get('/', indexController.index);

router.get('/manage_acount', indexController.manageAcount);

router.get('/change_inforuser',indexController.changeInforUsers);

router.get('/manage_product',indexController.manageProduct); 

router.get('/manage_order', indexController.manageOrder);

router.get('/manage_store',indexController.manageStore);

router.get('/topten', indexController.top);

router.get('/statics', indexController.statics);

router.get('/index.html',indexController.index);

module.exports = router;
