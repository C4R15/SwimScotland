var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('meets', { domain: 'SwimScotland', title: 'Meets', layout: 'layout.hbs' });
});

module.exports = router;
