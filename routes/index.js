var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models');

var Hotel = models.Hotel,
    Restaurant = models.Restaurant,
    Activity = models.Activity,
    Place = models.Place;

module.exports = router;

router.get('/', function(req, res, next) {
    var hotels = Hotel.find().sort('name');
    var restaurants = Restaurant.find().sort('name');
    var activities = Activity.find().sort('name');
    
    Promise.all([hotels, restaurants, activities])
        .then(function(data) {
            res.render('index', {hotels: data[0], restaurants: data[1], activities: data[2]});
        })
        .catch(next);
});