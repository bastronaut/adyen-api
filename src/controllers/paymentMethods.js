var express = require('express');
var router = express.Router();

/* GET payment methods */
router.get('/', function(req, res, next) {
  res.json({"hi": "theres"});
});

module.exports = router;
