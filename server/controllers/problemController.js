const problems = require("../shared/problems.json");

exports.getAllProblems = (req, res) => {
  res.status(200).json(problems);
};

exports.getProblemById = (req, res) => {
  const { id } = req.params;
  const problem = problems.find((p) => p.id === id);
  if (!problem) {
    return res.status(404).json({ message: "Problem not found" });
  }
  res.status(200).json(problem);
};
