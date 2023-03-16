const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/order');
const app = express();
const port = 3000;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("CONNECTION ERROR:");
        console.log(err);

    });
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/orderSubmit', function (req, res) {
  var order = new Order(req.body);
  order.save()
    .then(order => {
      console.log(order)
    })
    .catch(e => {
        console.log(e)
    })
  res.redirect('/order');
});

app.post('/designSubmit', function (req, res) {
  var order = new Order(req.body);
  order.save()
    .then(order => {
      console.log(order)
    })
    .catch(e => {
        console.log(e)
    })
  res.redirect('/design');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});