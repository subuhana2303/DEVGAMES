const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  inputFormat: String,
  outputFormat: String,
  difficulty: String,
  topic: String
});

module.exports = mongoose.model('Problem', problemSchema);
