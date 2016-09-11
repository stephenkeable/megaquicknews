var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressLess = require('express-less');
var http = require('http');
var minifyHTML = require('express-minify-html');
var striptags = require('striptags');
var favicon = require('serve-favicon');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var hbs = require('hbs');

hbs.registerHelper('striptags', function(input_text) {
  return striptags(input_text);
});

app.set('port', (process.env.PORT || 80));

app.set('guardian_api_key', (process.env.GUARDIAN_API_KEY || process.env.ENV_GUARDIAN_API_KEY));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/less-css', expressLess(__dirname + '/public/styles/', { compress: true }));

app.use(minifyHTML({
  override:      true,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

// sections

var home = require('./routes/home');
app.use('/', home);

var news = require('./routes/news');
app.use('/news', news);

var sport = require('./routes/sport');
app.use('/sport', sport);

var ents = require('./routes/ents');
app.use('/entertainment', ents);

//handle robots.txt requests
app.get('/robots.txt', function (req, res) {
	
    res.type('text/plain');
    res.send("User-agent: Googlebot-Image\nDisallow: /\n\nUser-agent: *\nDisallow: ");
    
});

// favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
