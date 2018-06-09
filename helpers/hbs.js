
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
   return `http://www.facebook.com/dialog/feed?  
    app_id=687459278312541&  
    link=http://developers.facebook.com/docs/reference/dialogs/&
    picture=http://fbrell.com/f8.jpg&  
    name=Facebook%20Dialogs&  
    caption=Reference%20Documentation& 
    description=Dialogs%20provide%20a%20simple,%20consistent%20interface%20for%20applications%20to%20interact%20with%20users.&
    message=Facebook%20Dialogs%20are%20so%20easy!&
    redirect_uri=http://www.example.com/response`;
  }
  
} 