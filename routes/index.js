const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Piepoll - Create polls' });
})

module.exports = router;