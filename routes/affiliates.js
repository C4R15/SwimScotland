var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('affiliates', { domain: 'SwimScotland', title: 'Affliliates', layout: 'layout.hbs' });
});

module.exports = router;
