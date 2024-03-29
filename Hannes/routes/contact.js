var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');

router.get('/', function (req, res) {
    
    Page.findOne({slug: 'contact'}, function (err, page) {
        if (err)
            console.log(err);

        res.render('contact', {
            title: page.title,
            content: page.content
            
        });
    });
    
});



/*
 * GET a page
 */
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({slug: slug}, function (err, page) {
        if (err)
            console.log(err);
        
        if (!page) {
            res.redirect('/');
        } else {
            res.render('contact', {
                title: page.title,
                content: page.content
            });
        }
    });

    
});



// Exports
module.exports = router;


