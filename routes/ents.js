var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

// GET index

router.get('/', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/culture?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Entertainment News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('ents' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET tv

router.get('/tv', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/tv-and-radio?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "TV News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('ents' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});


module.exports = router;
