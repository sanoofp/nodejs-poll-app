
module.exports = {
  
  getPollPercent: function(totalVote, itemPoll) {
    return parseInt((itemPoll / totalVote) * 100);
  }
  
} 