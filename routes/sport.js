var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

var path = require('path');
var device = require('device');
var sass = require('node-sass');

var main_css = "";
var sport_custom_css = "";

sass.render({
  file: path.join(__dirname, '../public/css/main.scss'),
  outputStyle: 'compressed'
}, function(err, result){
    main_css = result.css;
});

// GET function to grab all
// TODO possibly should show 404, instead of default to /entertainment

router.get('/:section?', function (req, res, next) {
                
    var guardian_tags, guardian_section, page_title;
    
    if (req.params.section == 'football') {
        
        guardian_section = 'football';
        page_title = 'Football News';
        guardian_tags = '-tone/minutebyminute';
        
    } else if (req.params.section == 'cricket') {
        
        guardian_section = 'sport';
        page_title = 'Cricket News';
        guardian_tags = '-tone/minutebyminute,sport/cricket';
        
    } else if (req.params.section == 'f1') {
        
        guardian_section = 'sport';
        page_title = 'F1 News';
        guardian_tags = '-tone/minutebyminute,sport/formulaone';
        
    } else if (req.params.section == 'tennis') {
        
        guardian_section = 'sport';
        page_title = 'Tennis News';
        guardian_tags = '-tone/minutebyminute,sport/tennis';
        
    } else if (req.params.section == 'golf') {
        
        guardian_section = 'sport';
        page_title = 'Golf News';
        guardian_tags = '-tone/minutebyminute,sport/golf';
        
    } else if (req.params.section == 'cycling') {
        
        guardian_section = 'sport';
        page_title = 'Cycling News';
        guardian_tags = '-tone/minutebyminute,sport/cycling';
        
    } else if (req.params.section == 'rugby-union') {
        
        guardian_section = 'sport';
        page_title = 'Rugby Union News';
        guardian_tags = '-tone/minutebyminute,sport/rugby-union';
        
    } else if (req.params.section == 'rugby-league') {
        
        guardian_section = 'sport';
        page_title = 'Rugby League News';
        guardian_tags = '-tone/minutebyminute,sport/rugbyleague';
        
    }  else {
        
        guardian_section = 'sport';
        page_title = 'Sport';
        guardian_tags = '-tone/minutebyminute';
        
    } 
    
    var request_url = "https://content.guardianapis.com/"+guardian_section+"?api-key="+req.app.get('guardian_api_key')+"&order-by=newest&tag="+guardian_tags+"&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = page_title;

        }

        next();
        
    });
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    var mydevice = device(req.headers['user-agent']);      
    if (req.get('CloudFront-Is-Desktop-Viewer') == "true" || mydevice.is('desktop') || req.hostname.indexOf("smart") > -1) {
        var view_name = "sport-desktop";
        device_string = "_desktop";
    } else {
        var view_name = "sport";
        device_string = "";
    }

    sass.render({
      file: path.join(__dirname, '../public/css/sport'+device_string+'.scss'),
      outputStyle: 'compressed'
    }, function(err, result){
        
        sport_custom_css = result.css;

        res.render(view_name , { 
            website: req.website,
            main_css: main_css,
            custom_css: sport_custom_css
        });
    });
    
});

module.exports = router;
