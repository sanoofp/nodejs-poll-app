const router = require('express').Router();
const crypto = require('crypto');
const Poll = require('../models/Polls');
const { check, validationResult } = require('express-validator/check');

router.get('/create', (req, res) => {
  res.render('poll/create');
});

router.post('/create', (req, res) => {
  let errors = [];
  req.assert('poll-option-title', 'Please enter a Poll title/Question').notEmpty();
  errors = req.validationErrors();

  if(req.body.poll_option[0] == '' || req.body.poll_option[1] == '') {
    let errobj = { msg: 'Required atleast 2 Poll Option(s)' };
    if(errors == false) {
      errors = [];
      errors.push(errobj);
      console.log('No errors from express-validation : ', errors);
    } else {
      errors.push(errobj);
      console.log('errors from express-validation : ', errors);
    }
  }

  if(errors) {
    req.flash('errors', errors);
    return res.render('index', {
      errors: errors,
      polltitle: req.body["poll-option-title"],
      pollopt1: req.body.poll_option[0],
      pollopt2: req.body.poll_option[1],
    });
  }

  let id = crypto.randomBytes(3).toString('hex');
  let pollsOptions = [];
  req.body.poll_option.map((item, index) => {
    if(item != '') {
      pollsOptions.push({ pollOption: item });
    }
  });

  const poll = new Poll({
    id: id,
    pollTitle: req.body["poll-option-title"],
    polls: pollsOptions
  });
  poll.save().then(poll => {
    req.flash('success', {msg:`Your poll is created.`})
    res.redirect(`/poll/${poll.id}`);
  });

});

router.get('/:id', (req, res) => {
  Poll.findOne({
    id: req.params.id
  }).then(poll => {
    res.render('poll/index', {
      pageTitle: `${poll.pollTitle} - Piepoll`,
      poll: poll
    });
  });
});

router.get('/info/:id', (req, res) => {
  Poll.findOne({
    id: req.params.id
  })
  .then(poll => {
    poll.polls.sort((a, b) => {
      return b.pollCount - a.pollCount 
    });
    res.render('poll/info', {
      pageTitle: `${poll.pollTitle} - Piepoll`,      
      poll: poll,
      jsonPoll: encodeURI(JSON.stringify(poll.polls)),
    });
  }).catch(err => console.log(err));
  
});



module.exports = router;