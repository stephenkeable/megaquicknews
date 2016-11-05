var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

var device = require('device');
var sass = require('node-sass');

var main_css = "";
var news_custom_css = "";

sass.render({
  file: '/app/public/css/main.scss',
  outputStyle: 'compressed'
}, function(err, result){
    main_css = result.css;
});

// GET function to grab all
// TODO possibly should show 404, instead of default to /entertainment

router.get('/:section?', function (req, res, next) {
                
    var guardian_tags, guardian_section, page_title;
    
    if (req.params.section == 'uk') {
        
        guardian_section = 'uk-news';
        page_title = 'UK News';
        guardian_tags = 'tone/news';
        
    } else if (req.params.section == 'world') {
        
        guardian_section = 'world';
        page_title = 'World News';
        guardian_tags = 'tone/news';
        
    } else if (req.params.section == 'politics') {
        
        guardian_section = 'politics';
        page_title = 'Politics News';
        guardian_tags = 'tone/news';
        
    } else if (req.params.section == 'tech') {
        
        guardian_section = 'technology';
        page_title = 'Techology News';
        guardian_tags = 'tone/news';
        
    } else if (req.params.section == 'science') {
        
        guardian_section = 'science';
        page_title = 'Science News';
        guardian_tags = 'tone/news';
        
    } else if (req.params.section == 'business') {
        
        guardian_section = 'business';
        page_title = 'Business News';
        guardian_tags = 'tone/news';
        
    } else if (req.params.section == 'money') {
        
        guardian_section = 'money';
        page_title = 'Money News';
        guardian_tags = 'tone/news';
        
    }  else {
        
        guardian_section = 'news';
        page_title = 'News';
        guardian_tags = '-theguardian/series/correctionsandclarifications,-theguardian/series/inside-guardian-weekly,-theobserver/series/for-the-record';
        
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
    if (req.get('CloudFront-Is-Desktop-Viewer') == "true" || mydevice.is('desktop')) {
        
        var view_name = "news-desktop";
        device_string = "_desktop";
        
    } else {
        var view_name = "news";
        device_string = "";
    }

    sass.render({
      file: '/app/public/css/news'+device_string+'.scss',
      outputStyle: 'compressed'
    }, function(err, result){
        
        news_custom_css = result.css;

        res.render(view_name , { 
            title: res.locals.page_title,
            website: req.website,
            main_css: main_css,
            custom_css: news_custom_css
        });
    });
    
});


module.exports = router;
