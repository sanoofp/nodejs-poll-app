
module.exports = {
  
  getPollPercent: function(totalVote, itemPoll) {
    if(totalVote !== 0) {
      return parseInt((itemPoll / totalVote) * 100);
    }
    return 0;
  },
  encodeURI: function(pollID) {
    return encodeURI(`https://api.whatsapp.com/send?text=http://piepoll.herokuapp.com/poll/${pollID}`)
  },
  FBShare: function(pollID) {
    let fbsharelink = `http://piepoll.herokuapp.com/poll/${pollID}`;
   return `https://www.facebook.com/sharer/sharer.php?u=${fbsharelink}`;
  }
  
} 