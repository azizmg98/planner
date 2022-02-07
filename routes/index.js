const express = require("express");
const {
  showEventController,
  showEventDetailsController,
  createEventController,
  updateEventController,
  deleteEventController,
} = require("../controllers");

const router = express();

router.post("", createEventController);
router.get("", showEventController);
router.get("/:id", showEventDetailsController);
router.put("/:id", updateEventController);
router.delete("/:id", deleteEventController);

module.exports = router;
