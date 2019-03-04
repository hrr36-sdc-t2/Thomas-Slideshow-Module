const mongoose = require('mongoose');

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/sdc2';
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, poolSize: 10 });

const listingSchema = mongoose.Schema({
  listingId: Number
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;