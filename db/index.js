const mongoose = require('mongoose');

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sdc2';

const connectMongo = () => {
  mongoose
    .connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      poolSize: 10
    })
    .catch(() => {
      console.log('MongoDB connection failed, retrying in 5 seconds.');
      setTimeout(connectMongo, 5000);
    });
};

connectMongo();

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