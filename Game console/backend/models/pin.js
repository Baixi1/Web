const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  release: {
    type: Date,
  },
  discontinued: {
    type: Date,
  },
  manufacturer: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = Item = mongoose.model('item', PinSchema);