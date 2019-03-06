const router = require('express').Router();

const Listing = require('../db');

router.get('/:listingId/images', (req, res) => {
  const time = Date.now();

  Listing
    .find({ listingId: req.params.listingId })
    .then(data => {
      console.log(`Found images for listing ${req.params.listingId} in ${Date.now() - time} ms`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
})

router.post('/', (req, res) => {
  const time = Date.now();
  const doc = new Listing(req.body);

  doc
    .save()
    .then(data => {
      console.log(`Added listing with id ${data.listingId} in ${Date.now() - time} ms`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
})

router.put('/:listingId', (req, res) => {
  const time = Date.now();

  Listing
    .updateOne({ listingId: req.params.listingId }, req.body)
    .then(data => {
      console.log(`Updated listing with id ${req.params.listingId} in ${Date.now() - time} ms`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
})

router.delete('/:listingId', (req, res) => {
  const time = Date.now();

  Listing
    .deleteOne({ listingId: req.params.listingId })
    .then(data => {
      console.log(`Deleted listing with id ${req.params.listingId} in ${Date.now() - time} ms`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
})

module.exports = router;