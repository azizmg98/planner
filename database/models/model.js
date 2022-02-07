const { Schema, model } = require("mongoose");
const slug = require("mongoose-slug-plugin");

// double checl=k startDate
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const EventSchema = new Schema(
  {
    organizer: { type: String, unique: true, maxlength: 20 },
    name: { type: String, match: /^\d{"event"}$/ },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    // image can't be null
    image: { name: String },
    numOfSeats: { type: Number, min: 5 },
    bookedSeats: {
      type: Number,
      default: 0,
      validate: {
        validator: function (num) {
          return num <= numOfSeats;
        },
      },
    },
    startDate: { type: Date, min: Date.now + 7 * 24 * 60 * 60 * 1000 },
    endDate: {
      type: Date,
      validate: {
        validator: function (num) {
          return num >= startDate;
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = model("Event", EventSchema);
