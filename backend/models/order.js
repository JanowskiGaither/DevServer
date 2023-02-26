const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({ 
    orderID: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    taxExemption: {
        type: String,
        default: 'N/A'
    }
  });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;