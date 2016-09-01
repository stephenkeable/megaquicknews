var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();

// GET index

router.get('/', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/news?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=-theguardian/series/correctionsandclarifications,-theguardian/series/inside-guardian-weekl,-theobserver/series/for-the-record&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET uk

router.get('/uk', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/uk-news?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET world

router.get('/world', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/world?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "World News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET tech

router.get('/tech', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/technology?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Technology News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET science

router.get('/science', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/science?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Science News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET business

router.get('/business', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/business?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Business News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET money

router.get('/money', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/money?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=tone/news&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Money News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "news-desktop";
    } else {
        var view_name = "news";
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});


module.exports = router;
