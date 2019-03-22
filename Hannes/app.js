var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var fileUpload = require('express-fileupload');
var passport = require('passport');


// Connect to db

mongoose.connect (config.database,{ useNewUrlParser: true });
var db =  mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    
});


// Init app
var app = express();


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set global errors variable
app.locals.errors = null;


// Express fileUpload middleware
app.use(fileUpload());

// Body Parser middleware
// 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Express Session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
//  cookie: { secure: true }
}));

// Express Validator middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
                , root = namespace.shift()
                , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    },
    customValidators: {
        isImage: function (value, filename) {
            var extension = (path.extname(filename)).toLowerCase();
            switch (extension) {
                case '.jpg':
                    return '.jpg';
                case '.jpeg':
                    return '.jpeg';
                case '.png':
                    return '.png';
                case '.gif':
                    return '.gif';
                case '':
                    return '.jpg';
                default:
                    return false;
            }
        }
    }
}));

// Express Messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req,res,next) {
    res.locals.user = req.user || null;
    next();
 });


// Set routes 
var index = require('./routes/index.js');
var products = require('./routes/products.js');
var home = require('./routes/home.js');
var about = require('./routes/about.js')
var contact = require('./routes/contact.js')
var adminPages = require('./routes/admin_pages.js');
var adminProduct = require('./routes/admin_productfix.js');
var users = require('./routes/users.js');



app.use('/users', users);
app.use('/admin/pages', adminPages);
app.use('/admin/products', adminProduct);
app.use('/index', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/content', products);
app.use('/', index);


// Start the server
//8081
var port = 8081;
app.listen(port, function () {
    console.log('Server started on port ' + port);
});
