var express = require('express');
var router = express.Router();

var device = require('device');
var sass = require('node-sass');

var main_css = "";
var home_custom_css = "";

sass.render({
  file: '/app/public/css/main.scss',
  outputStyle: 'compressed'
}, function(err, result){
    main_css = result.css;
});

router.get('/', function (req, res, next) {
    
    res.locals.page_title = "2G News - News website designed to be fast even on a 2G phone.";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");

    var mydevice = device(req.headers['user-agent']);      
    if (req.get('CloudFront-Is-Desktop-Viewer') == "true" || mydevice.is('desktop')) {
        var view_name = "home-desktop";
        device_string = "_desktop";
        
    } else {
        var view_name = "home";
        device_string = "";
    }

    sass.render({
      file: '/app/public/css/home'+device_string+'.scss',
      outputStyle: 'compressed'
    }, function(err, result){
        
        home_custom_css = result.css;

        res.render(view_name , { 
            title: res.locals.page_title,
            website: req.website,
            main_css: main_css,
            custom_css: home_custom_css
        });
    });
    
});

router.get('/about', function (req, res, next) {
    
    res.locals.page_title = "About 2G News";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");

    sass.render({
      file: '/app/public/css/generic.scss',
      outputStyle: 'compressed'
    }, function(err, result){
        
        home_custom_css = result.css;

        res.render('about' , { 
            title: res.locals.page_title,
            website: req.website,
            main_css: main_css,
            custom_css: home_custom_css
        });
    });
    
});

module.exports = router;
