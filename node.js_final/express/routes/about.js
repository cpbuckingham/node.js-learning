var express = require('express');
var router = express.Router();

/* GET about. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'about',
        name: 'cpbuckingham'
    });
});

module.exports = router;
