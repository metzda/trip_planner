var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models');

var Hotel = models.Hotel,
    Restaurant = models.Restaurant,
    Activity = models.Activity,
    Place = models.Place;

module.exports = router;

router.get('/', function(req, res, next) {
    res.send('Hello');
});