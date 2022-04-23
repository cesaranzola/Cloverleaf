//===============Mongoose==================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//==============Schema=======================
const CampGroundSchema = new Schema({
	title: String,
	price: String,
	description: String,
	location: String,
});

//==============Module Export================
module.exports = mongoose.model('Campground', CampGroundSchemal);
