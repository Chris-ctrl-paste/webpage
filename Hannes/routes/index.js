var express = require('express');
var router = express.Router();
var fs = require('fs-extra');

// Get Content model
var Product= require('../models/product');




router.get('/', function (req, res) {
//router.get('/', isUser, function (req, res) {

    Product.find(function (err, products) {
        if (err)
            console.log(err);

        res.render('index', {
        
            products: products,
     
            
        });
    });

});









// Exports
module.exports = router;


