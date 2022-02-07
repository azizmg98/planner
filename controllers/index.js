const Event = require("../database/models/model");

exports.createEventController = async (req, res) => {
  const event = req.body;
  try {
    const createdEvent = await Event.create(event);
    res
      .status(200)
      .json({ msg: "the event has been created", payload: createdEvent });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.showEventController = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200);
    res.json(events);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.showEventDetailsController = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateEventController = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteEventController = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};
