const mongoose = require('mongoose');

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/sdc2';
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, poolSize: 10 });

const slideSchema = mongoose.Schema({
  imgPath: Number,
  description: String
});

const listingSchema = mongoose.Schema({
  listingId: { type: Number, index: true, unique: true },
  images: [slideSchema]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;