const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  category: String,
  featuredImage: String,
  gallery: [String]
});

module.exports = mongoose.model('Venue', venueSchema);
