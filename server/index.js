const express = require('express');
const app = express();
const cors = require('cors');

const Listing = require('../db');

const port = process.env.PORT || 3001;

app.use('/rooms/:listingId/', express.static(__dirname + '/../client/dist'));
app.use('/favicon.ico', express.static(__dirname + '/../client/dist/favicon.ico'));

app.get('/rooms/:listingId/images', cors(), (req, res) => {
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

app.listen(port);
console.log('Listening on port', port);