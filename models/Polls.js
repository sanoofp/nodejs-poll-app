const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollsSchema = new Schema({
  id: { type: String, required: true },
  pollTitle: { type: String, required: true },
  polls: [{
    pollOption: { type: String, required: true },
    pollCount: { type: Number, default: 0 }
  }],
  totalVote: { type: Number, default: 0 },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('polls', pollsSchema)