const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Profile fetch failed", error: err.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 }).limit(10);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Leaderboard fetch failed", error: err.message });
  }
};
