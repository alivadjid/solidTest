const mongoose = require('mongoose');

const quotes = new mongoose.Schema({
// { "ticker": "AAPL", "date": new Date(2020, 0, 1), "price": 287.99 }
  ticker: {
    type: String,
  },
  date: {
    type: Date
  },
  price: {
    type: Number
  }
})

module.exports = mongoose.model('Quotes', quotes)