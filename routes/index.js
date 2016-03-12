var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models');
var swig = require('swig');

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

router.post('/hotel', function(req, res, next) {
    Hotel.findById(req.body.hotel)
    .then(function(hotel) {
        // add hotel name to list snippet at bottom for proper day
        console.log(swig.renderFile('../views/trip_list_item.html', {item_name: hotel.name}));
        //$('#added-hotels').append()
        // add map tag based on hotel place lat/long
    })
    .catch(next);
    
    
    res.redirect('/');
});