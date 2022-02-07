const { Schema, model } = require("mongoose");

// double checl=k startDate
const validateEmail = function (email) {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const validateName = name => {
	if (name && name === "event") {
		return false;
	} else {
		return true;
	}
};

const validatesSeets = num => {
	if (num && +num > +this.numOfSeats) {
		return false;
	} else {
		return true;
	}
};

const EventSchema = new Schema(
	{
		organizer: {
			type: String,
			unique: true,
			maxLength: 20,
		},
		name: {
			type: String,
			validate: validateName,
			// match: /^\d{"event"}$/,
		},
		email: {
			type: String,
			validate: validateEmail,
			required: true,
		},
		// image can't be null
		image: {
			type: String,
			required: true,
		},
		numOfSeats: {
			type: Number,
			min: 5,
		},
		bookedSeats: {
			type: Number,
			default: 0,
			max: this.numOfSeats,
			validate: validatesSeets,
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
