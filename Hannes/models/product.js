var mongoose = require('mongoose');

// Product Schema
var ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    personal: {
        type: String
    },
    desc: {
        type: String
    },
    year: {
        type: String 
    },
    write: {
        type: String
    },

    image: {
        type: String
    }
    
});

var Product = module.exports = mongoose.model('Product', ProductSchema);