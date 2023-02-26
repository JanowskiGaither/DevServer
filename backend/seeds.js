const mongoose = require('mongoose');
const Order = require('./models/order');
mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("CONNECTION ERROR:")
        console.log(err)

    });

const order = new Order({
    orderID: 'CHS Baseball Team 2023',
    firstName: 'Bobby',
    lastName: 'Johnson',
    organization: 'Claxton High School',
    email: 'bobby.johnson@chs.edu',
    phone: '987-654-3210',
    dueDate: '2023-03-07'
});

order.save()
    .then(order => {
        console.log(order)
    })
    .catch(e => {
        console.log(e)
    })