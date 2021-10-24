const mongoose = require('mongoose');

const Cart = new mongoose.Schema({
    order_date: {
        type: Date,
        
    },
    prod_name: {
        type: String,
        min: 2,
        max: 1005
    },
    prod_id: {
        type: String,
        min: 2,
        max: 1005
    },
    price: {
        type: String,
        min: 2,
        max: 1005
    },
    user_ip: {
        type: String,
        min: 2,
        max: 1005
    },
    ref:{
        type: String,
        min: 2,
        max: 1005
    }
    
    
 
});

module.exports = mongoose.model('Cart',Cart);