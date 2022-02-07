const { Schema, model } = require("mongoose");

// double checl=k startDate
var validateEmail = function (email) {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const EventSchema = new Schema(
	{
		organizer: {
			type: String,
		},
		name: {
			type: String,
			// match: /^\d{"event"}$/,
		},
		email: {
			type: String,
		},
		// image can't be null
		image: {
			name: String,
		},
		numOfSeats: {
			type: Number,
			min: 5,
		},
		bookedSeats: {
			type: Number,
		},
		startDate: {
			type: Date,
			// min: Date.now + 7 * 24 * 60 * 60 * 1000,
		},
		endDate: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Event", EventSchema);
