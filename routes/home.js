var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
    res.locals.page_title = "2G News - News website designed to be fast even on a 2G phone.";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");

    res.render('home' , { 
  		title: res.locals.page_title,
  		website: req.website
  	});
    
});

router.get('/about', function (req, res, next) {
    
    res.locals.page_title = "About 2G News";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");

    res.render('about' , { 
  		title: res.locals.page_title,
  		website: req.website
  	});
    
});

//router.get('/test', function (req, res, next) {
//    
//    res.locals.page_title = "Cloudfront test";
//    
//    next();
//    
//}, function (req, res) {
//    
//    //set cache control headers
//	res.set("Cache-Control","max-age=86400");
//    res.set("Vary", "Accept-Encoding");
//    
//    res.locals.is_mobile = req.get('CloudFront-Is-Mobile-Viewer');
//    res.locals.is_desktop = req.get('CloudFront-Is-Desktop-Viewer');
//    res.locals.is_tablet = req.get('CloudFront-Is-Tablet-Viewer');
//    res.locals.is_tv = req.get('CloudFront-Is-SmartTV-Viewer');
//
//    res.render('test' , { 
//  		title: res.locals.page_title,
//  		website: req.website
//  	});
//    
//});

module.exports = router;