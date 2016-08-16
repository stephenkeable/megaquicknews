var fs = require('fs');
var request = require('request');

var xml2js = require('xml2js');

var express = require('express');
var router = express.Router();

// GET index

router.get('/', function (req, res, next) {
    
    res.locals.page_title = "Football News";
    
    var parser = new xml2js.Parser();
    
    var request_url = "https://content.guardianapis.com/football?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Football News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('football' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET norwich

router.get('/norwich', function (req, res, next) {
    
    res.locals.page_title = "Norwich City News";
    
    var parser = new xml2js.Parser();
    
    request('http://www.bbc.co.uk/sport/football/teams/norwich-city/rss.xml', function (error, response, body) {

        if (!error && response.statusCode == 200) {

            parser.parseString(body, function (err, result) {

                channel = result.rss.channel;

                for (i = 0; i < channel.length; i++) {

                    items = channel[i].item;

                    res.locals.news_items = items;

                }

            });

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");

    res.render('news' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

module.exports = router;