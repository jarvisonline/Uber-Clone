const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistTokenModel");
const captainModel = require("../models/captainModel");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlackListed = await blacklistTokenModel.findOne({ token: token });
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unathorized" });
  }
  const isBlackListed = await userModel.findOne({ token: token });
  if (!isBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    return next();
  } catch (err) {
    res.status(401).json({ message: "unauthorized" });
  }
};
