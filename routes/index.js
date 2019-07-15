var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
router.get('/index1', function(req, res, next) {
  res.render('pages/index1', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('pages/home', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Express' });
});
module.exports = router;
