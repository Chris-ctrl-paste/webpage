var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');




router.get('/', function (req, res) {
    
    Page.findOne({slug: 'about'}, function (err, page) {
        if (err)
            console.log(err);

        res.render('about', {
            title: page.title,
            content: page.content,
            experience: page.experience,
            education: page.education
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
            res.render('about', {
                title: page.title,
                content: page.content,
                experience: page.experience,
                education: page.education
            });
        }
    });

    
});



// Exports
module.exports = router;


