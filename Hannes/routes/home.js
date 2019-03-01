var express = require('express');
var router = express.Router();
var fs = require('fs-extra');




var Detail = require('../models/product');



router.get('/', function (req, res) {
    //router.get('/', isUser, function (req, res) {
    
        Detail.find(function (err, products) {
            if (err)
                console.log(err);
    
            res.render('second', {
                title: 'home',
                products: products
            });
        });
    
    });


  



// Exports
module.exports = router;