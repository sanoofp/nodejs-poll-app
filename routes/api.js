const router = require('express').Router();
const Poll = require('../models/Polls')

//api for js
router.get('/latest', (req, res) => {
  Poll.find({})
    .sort({date: 'desc'})
    .limit(6)
    .then(polls => {
      res.json(polls);
    });
});

module.exports = router;
