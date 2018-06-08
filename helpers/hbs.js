
module.exports = {
  
  getPollPercent: function(totalVote, itemPoll) {
    if(totalVote !== 0) {
      return parseInt((itemPoll / totalVote) * 100);
    }
    return 0;
  }
  
} 