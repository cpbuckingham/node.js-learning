var express = require('express');
var router = express.Router();

/* GET forum. */
router.get('/', function(req, res, next) {
    res.render('forum', {
        title: 'forum',
        name: 'cpbuckingham'
    });
});

module.exports = router;
