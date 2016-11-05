var fs = require('fs');
var request = require('request');

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
    
var desktop_custom_css = 'section h1{background:#036;}@media(min-width:420px){section ul{padding:0 5px;display:flex;flex-flow:row wrap;justify-content:center;}section ul:after{content:"";display:table;clear:both;}section ul li{width:300px;margin:10px 5px;float:left;height:450px;overflow:hidden;display:inline-block;padding:10px;}}section ul li img{max-width:100%;height:auto;display:block;margin-bottom:5px;}';

var custom_css = 'section h1{background:#036;}';

// GET function to grab all
// TODO possibly should show 404, instead of default to /entertainment

router.get('/:section?', function (req, res, next) {
                
    var guardian_tags, guardian_section, page_title;
    
    if (req.params.section == 'tv') {
        
        guardian_section = 'tv-and-radio';
        page_title = 'TV News';
        guardian_tags = 'type/article';
        
    } else if (req.params.section == 'film') {
        
        guardian_section = 'film';
        page_title = 'Film News';
        guardian_tags = 'type/article';
        
    } else if (req.params.section == 'music') {
        
        guardian_section = 'music';
        page_title = 'Music News';
        guardian_tags = 'type/article';
        
    } else if (req.params.section == 'books') {
        
        guardian_section = 'books';
        page_title = 'Books News';
        guardian_tags = 'type/article';
        
    } else if (req.params.section == 'stage') {
        
        guardian_section = 'stage';
        page_title = 'Stage News';
        guardian_tags = 'type/article';
        
    } else if (req.params.section == 'games') {
        
        guardian_section = 'search';
        page_title = 'Games News';
        guardian_tags = 'technology/games';
        
    } else if (req.params.section == 'art') {
        
        guardian_section = 'artanddesign';
        page_title = 'Art News';
        guardian_tags = 'type/article';
        
    }  else {
        
        guardian_tags = 'type/article';
        guardian_section = 'culture';
        page_title = 'Entertainment News';
        
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
        var view_name = "ents-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "ents";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website,
        main_css: main_css
  	});
    
});

module.exports = router;
