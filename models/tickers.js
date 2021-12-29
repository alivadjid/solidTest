const mongoose = require('mongoose');

const tickers = new mongoose.Schema({
// { "ticker": "AAPL", "name": "Apple Inc. АО (US0378331005)", "currency": "USD" }
  ticker: {
    type: String
  },
  name: {
    type: String
  },
  currency: {
    type: String
  }
})

module.exports = mongoose.model('Tickers', tickers)