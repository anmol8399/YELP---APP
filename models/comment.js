var mongoose = require("mongoose"),
	commentSchema = mongoose.Schema({
		text: String,
		Author: String
	});


module.exports = mongoose.model("Comment",commentSchema);
