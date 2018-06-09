const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Piepoll - Create polls' });
});
router.get('/policy', (req, res) => {
  res.render('index', { pageTitle: 'Piepoll - Privacy and policy' });
});
router.get('/terms', (req, res) => {
  res.render('index', { pageTitle: 'Piepoll - Terms and service' });
});

module.exports = router;