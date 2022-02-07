const Event = require("../database/models/events.model");

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
	const { id } = req.params;
	try {
		const foundevent = await Event.findById(id);
		if (foundevent) {
			res.status(200).json({ msg: foundevent });
		} else {
			res.status(404).send("Product not found");
		}
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

exports.updateEventController = async (req, res) => {
	const { id } = req.params;
	const event = req.body;
	try {
		const foundevent = await Event.findByIdAndUpdate(id, event, {
			runValidators: true,
			new: true,
		});
		if (foundevent) {
			res.status(200).end();
		} else {
			res.status(404).send("Product not found");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.deleteEventController = async (req, res) => {
	const { id } = req.params;
	try {
		const foundevent = await Event.findByIdAndDelete(id);
		if (foundevent) {
			res.status(204).end();
		} else {
			res.status(404).send("Product not found");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
