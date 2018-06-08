module.exports = {
  alreadyVoted: function(req, res, next) {
    if (req.cookies.piepoll_vote_status) {
      let alreadyVoted = false;
      req.cookies.piepoll_vote_status.split("-").find(item => {
        if (item === req.params.id) {
          alreadyVoted = true;
          return true;
        }
      });
      if (alreadyVoted) {
        req.flash("errors", {
          msg: "Sorry! you are already voted for this poll.",
          errRedirectLink: `/poll/info/${req.params.id}`  
        });
        return res.redirect(`/poll/${req.params.id}`);
      }

      return next();
    }
    return next();
  }
};
