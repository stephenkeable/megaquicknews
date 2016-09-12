var express = require('express');
var router = express.Router();

var device = require('device');
    
var desktop_custom_css = '@media(min-width:420px){section {padding:0 5px;display:flex;flex-flow:row wrap;justify-content:center;}section:after{content:"";display:table;clear:both;}section div{width:33%;margin:10px 5px;float:left;height:450px;overflow:hidden;display:inline-block;padding:10px;}}h2{padding:5px 10px;} h2 a{color:#fff;text-decoration:none;} #news{background:#c30;}#sport{background:#360;} #ents{background:#036;}';

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
        res.locals.custom_css = desktop_custom_css;
        
    } else {
        var view_name = "home";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
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
    
    res.locals.custom_css = "section h1{background:#333;} p, h2{padding:5px 10px;} h2{font-weight:bold;}";

    res.render('about' , { 
  		title: res.locals.page_title,
  		website: req.website
  	});
    
});

// TO DO, currently using just cloudfront device detection headers
// Include express-device and if no cloufront header fallback to this to sniff agent for desktop

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
