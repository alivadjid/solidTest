const express = require('express');
const app = express();
const connectDB = require ("./config/db.js")
const Tickers = require('./models/tickers')
const Quotes = require('./models/quotes')
const cors = require('cors')
connectDB()
console.log('Connect', connectDB())

app.use(cors())


app.use('/api/tickers', (req, res) => {
  Tickers.find().exec((err, data) => {
    res.json(data)
  })
  // res.send('Serverwork!')
})
app.use('/api/quotes', (req, res) => {
  Quotes.find().exec((err, data) => {
    res.json(data)
  })
})
app.use('/api/find', (req, res) => {
  // console.log('req', req.query)
  const ticker = req.query.ticker
  Quotes.find({ticker}).exec((err,data) => {
    res.json(data)
  })
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`)
})