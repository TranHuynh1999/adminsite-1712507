module.exports.index=function(req, res, next) {
    res.render('index', { title: 'Express' })};
module.exports.manageAcount=function(req, res, next) {
        res.render('manage_account', { title: 'Quản lý tài khoản' })};
module.exports.changeInforUsers=function(req, res, next) {
    res.render('change_infor', { title: 'Thay đổi thông tin người dùng' })};
module.exports.manageProduct=function(req, res, next) {
    res.render('manage_product', { title: 'Quản lý sản phẩm' })};
module.exports.manageOrder=function(req, res, next) {
        res.render('manage_order', { title: 'Quản lý đơn hàng' })};
module.exports.manageStore= function(req, res, next) {
    res.render('manage_systemstall', { title: 'Quản lý hệ thống gian hàng' })};
module.exports.top=function(req, res, next) {
        res.render('top_ten', { title: 'Top 10 sản phẩm ' })};
module.exports.statics=function(req, res, next) {
    res.render('sales_statics', { title: 'Thống kê doanh số' })};