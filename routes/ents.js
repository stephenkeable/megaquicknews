var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

// GET index

router.get('/', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/culture?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
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
            
    var request_url = "https://content.guardianapis.com/tv-and-radio?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
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

// GET film

router.get('/film', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/film?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Film News";

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

// GET music

router.get('/music', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/music?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Music News";

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


// GET books

router.get('/books', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/books?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Books News";

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


// GET stage

router.get('/stage', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/stage?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Stage News";

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


// GET games

router.get('/games', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/news?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=technology/games&show-fields=trailText,thumbnail";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Games News";

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


// GET art

router.get('/art', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/artanddesign?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=&show-fields=trailText,thumbnail";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Art News";

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
