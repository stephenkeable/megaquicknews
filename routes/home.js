var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
    res.locals.page_title = "WAP portal";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");

    res.render('home' , { 
  		title: res.locals.page_title,
  		website: req.website
  	});
    
});

module.exports = router;