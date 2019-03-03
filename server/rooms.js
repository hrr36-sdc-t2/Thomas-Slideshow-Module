const router = require('express').Router();
const cors = require('cors');

const Listing = require('../db');

router.get('/:listingId/images', cors(), (req, res) => {
  Listing
    .find({ listingId: req.params.listingId })
    .then(data => {
      console.log(`found images for listing ${req.params.listingId}`);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
})

module.exports = router;