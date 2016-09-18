var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

var device = require('device');
    
var desktop_custom_css = 'section h1{background:#c30;}@media (min-width:420px) {section ul{padding:0 5px;display:flex;flex-flow:row wrap;justify-content:center;}section ul:after{content:"";display:table;clear:both;}section ul li{width:300px;margin:10px 5px;float:left;height:450px;overflow:hidden;display:inline-block;padding:10px;}}section ul li img{max-width:100%;height:auto;display:block;margin-bottom:5px;}';

var custom_css = 'section h1{background:#c30;}';

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
        
    } else if (req.params.section == 'technology') {
        
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
        res.locals.custom_css = desktop_custom_css;
        
    } else {
        var view_name = "news";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});


module.exports = router;
