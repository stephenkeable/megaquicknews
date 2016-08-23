var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

// GET index

router.get('/', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=-tone/minutebyminute&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Sport News";
            
            //res.locals.is_mobile = req.get('CloudFront-Is-Mobile-Viewer');
            //res.locals.is_desktop = req.get('CloudFront-Is-Desktop-Viewer');
            //res.locals.is_tablet = req.get('CloudFront-Is-Tablet-Viewer');
            //res.locals.is_tv = req.get('CloudFront-Is-SmartTV-Viewer');
            
            //console.log("mobile" + req.get('CloudFront-Is-Mobile-Viewer'));
            //console.log("desktop" + req.get('CloudFront-Is-Desktop-Viewer'));
            //console.log("tablet" + req.get('CloudFront-Is-Tablet-Viewer'));
            //console.log("tv" + req.get('CloudFront-Is-SmartTV-Viewer'));

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET football

router.get('/football', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/football?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=-tone/minutebyminute&show-fields=trailText";
        
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

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET cricket

router.get('/cricket', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/cricket&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Cricket News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET f1

router.get('/f1', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/formulaone&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Formula One News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET tennis

router.get('/tennis', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/tennis&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Tennis News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET golf

router.get('/golf', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/golf&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Golf News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET cycling

router.get('/cycling', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/cycling&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Cycling News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET rugby union

router.get('/rugby-union', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/rugby-union&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Rugby Union News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET rugby league

router.get('/rugby-league', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/rugbyleague&show-fields=trailText";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Rugby League News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    res.render('sport' , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});


module.exports = router;
