var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Hola mundoo3' });
  res.send("Express go");
});

module.exports = router;
