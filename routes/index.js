var express = require('express');
var router = express.Router();

var jd = require("../jdata.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { a: 'a',name:'aaa', jdata:jd});
});

module.exports = router;
