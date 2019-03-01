var express = require('express');
var router = express.Router();
var fs = require('fs-extra');



// Get Product model
var Product = require('../models/product');


router.get('/:product', function (req, res) {

    var galleryImages = null;
    

    Product.findOne({slug: req.params.product}, function (err, product) {
        if (err) {
            console.log(err);
        } else {
            var galleryDir = 'public/product_images/' + product._id + '/gallery';

            fs.readdir(galleryDir, function (err, files) {
                if (err) {
                    console.log(err);
                } else {
                    galleryImages = files;

                    res.render('content', {
                        title: product.title,
                        p: product,
                        desc: product.desc,
                        write: product.write,
                        galleryImages: galleryImages,
                        
                    });
                }
            });
        }
    });

});
// Exports
module.exports = router;
