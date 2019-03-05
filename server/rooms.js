const router = require('express').Router();

const Listing = require('../db');

router.get('/:listingId/images', (req, res) => {
  const time = Date.now();
  Listing
    .find({ listingId: req.params.listingId })
    .then(data => {
      console.log(`found images for listing ${req.params.listingId} in ${Date.now() - time} ms`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
})

router.post('/', (req, res) => {
  const time = Date.now();
  console.log(req.body);
  Listing
    .create(req.body)
    .then(data => {
      console.log(`added listing with id ${data.listingId} in ${Date.now() - time} ms`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
})

module.exports = router;