var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trip_planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    phone: String,
    location: [Number]
});

var hotelSchema = new mongoose.Schema({
    name: String,
    place: [placeSchema],
    numStars: { type: Number, min: 1, max: 5 },
    amenities: String // { type: [String], get: function(amenities) { return amenities.join(', '); } }
});


var activitySchema = new mongoose.Schema({
    name: String,
    place: [placeSchema],
    age_range: String
});


var restaurantSchema = new mongoose.Schema({
    name: String,
    place: [placeSchema],
    cuisine: String, //{ type: [String], get: function(cuisines) { return cuisines.join(', '); } },
    price: { type: Number, min: 1, max: 5 }
});


var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant
}