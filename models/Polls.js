const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollsSchema = new Schema({
  id: { type: String, required: true },
  pollName: { type: String, required: true },
  polls: [{
    pollOption: { type: String, required: true },
    pollCound: { type: Number, required: true }
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

const Polls = mongoose.model('polls', pollSchema);
module.exports = Polls