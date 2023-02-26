const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//const Order = require('./models/order');
mongoose.connect('mongodb://mongo:27017/test');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/order', function (req, res) {
  console.log(req.body)
  res.json(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});