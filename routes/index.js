var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { menu: 'index' });
});
router.get('/manage', function(req, res) {
  res.render('manage', { menu: 'manage' });
});
router.get('/make', function(req, res) {
  res.render('make', { menu: 'make' });
});
router.get('/setup', function(req, res) {
  res.render('setup', { menu: 'setup' });
});

module.exports = router;
