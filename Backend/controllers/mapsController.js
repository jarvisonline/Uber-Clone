const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");
module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.debug("Validation errors:", errors.array()); // Debugging: log validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  console.debug("Received address:", address); // Debugging: log the received address

  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    console.debug("Coordinates retrieved:", coordinates); // Debugging: log the retrieved coordinates
    res.status(200).json(coordinates);
  } catch (error) {
    console.error("Error fetching coordinates:", error); // Log the error for debugging
    res.status(404).json({ message: "Coordinates not found" });
  }
};
module.exports.getDistanceTime = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { origin, destination } = req.query();
    const distanceTime = await mapsService.getDistanceTime(origin, destination);
    res.status(200).json(distanceTime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server errror" });
  }
};
module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { input } = req.query;
    const suggestions = await mapsService.getAutoCompleteSuggestions(input);
    res.status(200).json(suggestions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
