var mongoose = require('mongoose');

// Page Schema
var PageSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },

    content: {
        type: String,
        required: true
    },

    experience: {
        type: String
        
    },

    education: {
        type: String
    
    },
    sorting: {
        type: Number
    }
    
});

var Page = module.exports = mongoose.model('Page', PageSchema);

