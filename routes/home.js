var express = require('express');
var router = express.Router();

var device = require('device');
var sass = require('node-sass');

var main_css = "";

sass.render({
  file: '/app/public/css/main.scss',
  outputStyle: 'compressed'
}, function(err, result){
    main_css = result.css;
});
    
var desktop_custom_css = '@media(min-width:420px){section {display:flex;flex-flow:row wrap;justify-content:center;}section div{flex-grow:2;float:left;display:inline-block;}}h2{padding:5px 10px;}h2 a{color:#fff;text-decoration:none;}#news{background:#c30;}#sport{background:#360;} #ents{background:#036;}';

var custom_css = 'section h1{background:#333;} h2{padding:5px 10px;} h2 a{color:#fff;text-decoration:none;} #news{background:#c30;}#sport{background:#360;} #ents{background:#036;}';

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
        res.locals.custom_css = result.css;
    });

    res.render(view_name , { 
  		title: res.locals.page_title,
  		website: req.website,
        main_css: main_css
  	});
    
});

router.get('/about', function (req, res, next) {
    
    res.locals.page_title = "About 2G News";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");
    
    res.locals.custom_css = "section h1{background:#333;} p, h2{padding:5px 10px;} h2{font-weight:bold;}";

    res.render('about' , { 
  		title: res.locals.page_title,
  		website: req.website,
        main_css: main_css
  	});
    
});

module.exports = router;
