const router = require('express').Router();
const crypto = require('crypto');

router.get('/', (req, res) => {
  let hash = crypto.randomBytes(3).toString('hex');
  console.log('Hash: ', hash);
  res.render('index');
})

module.exports = router;