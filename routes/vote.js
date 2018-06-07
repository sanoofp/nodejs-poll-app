const router = require('express').Router();
const Polls = require('../models/Polls');
const { check, validationResult } = require('express-validator/check');

router.post('/:id', (req, res) => {
  req.assert('pollOptions', 'Please Vote atleast one option').notEmpty();
  let errors = req.validationErrors();
  if(errors) {
    req.flash('errors', errors);
    return res.redirect(`/poll/${req.params.id}`)
  }
  
  Polls.findOne({id: req.params.id})
    .then(poll => {
      poll.totalVote++;
      poll.polls.find((voteitem, idx) => {
        if(voteitem.pollOption === req.body.pollOptions) {
          voteitem.pollCount++;
          return true;
        }        
      });
      
      poll.save().then(poll => {
        req.flash('success', {msg: `You are successfully Voted for ${req.body.pollOptions}`});
        return res.redirect(`/poll/info/${req.params.id}`);
      });

    });

});

module.exports = router;