var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

// GET index

router.get('/', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/news?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('news' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET tv

router.get('/uk', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/uk-news?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "UK News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('news' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});


module.exports = router;
