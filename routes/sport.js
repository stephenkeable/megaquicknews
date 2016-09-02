var fs = require('fs');
var request = require('request');

var express = require('express');
var router = express.Router();
    
var desktop_custom_css = 'section h1{background:#360;}@media (min-width:420px) {section ul{padding:0 5px;display:flex;flex-flow:row wrap;justify-content:center;}section ul:after{content:"";display:table;clear:both;}section ul li{width:300px;margin:10px 5px;float:left;height:450px;overflow:hidden;display:inline-block;padding:10px;}}section ul li img{max-width:100%;height:auto;display:block;margin-bottom:5px;}';

var custom_css = 'section h1{background:#360;}';

// GET index

router.get('/', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=-tone/minutebyminute&show-fields=trailText,thumbnail&page-size=12";
        
    request(request_url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            
            guardian_object = JSON.parse(body);
            
            res.locals.news_items = guardian_object.response.results;
            
            res.locals.title = "Sport News";

        }

        next();
        
    });
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=1800");
    res.set("Vary", "Accept-Encoding");

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET football

router.get('/football', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/football?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=-tone/minutebyminute&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET cricket

router.get('/cricket', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/cricket&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET f1

router.get('/f1', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/formulaone&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET tennis

router.get('/tennis', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/tennis&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET golf

router.get('/golf', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/golf&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET cycling

router.get('/cycling', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/cycling&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET rugby union

router.get('/rugby-union', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/rugby-union&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});

// GET rugby league

router.get('/rugby-league', function (req, res, next) {
            
    var request_url = "https://content.guardianapis.com/sport?api-key="+process.env.GUARDIAN_API_KEY+"&order-by=newest&tag=sport/rugbyleague&show-fields=trailText,thumbnail&page-size=12";
        
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

    if (req.get('CloudFront-Is-Desktop-Viewer') == "true") {
        var view_name = "sport-desktop";
        res.locals.custom_css = desktop_custom_css;
    } else {
        var view_name = "sport";
        res.locals.custom_css = custom_css;
    }

    res.render(view_name , { 
  		hostname: req.hostname,
  		website: req.website
  	});
    
});


module.exports = router;
