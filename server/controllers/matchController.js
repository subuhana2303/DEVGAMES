const Match = require('../models/Match');
const Problem = require('../models/Problem');

exports.startMatch = async (req, res) => {
  try {
    const { player1, player2 } = req.body;

    const randomProblem = await Problem.aggregate([{ $sample: { size: 1 } }]);
    const match = new Match({
      players: [player1, player2],
      problem: randomProblem[0],
      startedAt: new Date()
    });

    await match.save();
    res.status(200).json(match);
  } catch (err) {
    res.status(500).json({ message: "Could not start match", error: err.message });
  }
};

exports.submitCode = async (req, res) => {
  try {
    const { matchId, userId, result } = req.body;

    const match = await Match.findById(matchId);
    match.submissions.push({ user: userId, result });
    await match.save();

    res.status(200).json({ message: "Code submitted" });
  } catch (err) {
    res.status(500).json({ message: "Submission failed", error: err.message });
  }
};
