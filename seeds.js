var mongoose = require("mongoose"),
	Campground = require("./models/campground");

function seedDB(){
	Campground.remove({},function(err){
	if(err) console.log(err);
	else {
		console.log("Removed Campgrounds");
	}
});	
}
//add a few campgrnds
//adding comments

module.exports = seedDB;
