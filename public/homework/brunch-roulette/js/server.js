
// SETUP
// ------------------------------------

var express = require('express');
var app = express();
var router = express.Router();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// ROUTES
// ------------------------------------

router.get('/', function(req, res) {
    res.render('home');
});

app.use("/", router);

app.listen(app.get("port"), function() {
	app.get("port");
});

// YELP
// ------------------------------------
// Step 1. POST call to get access token
// Step 2. GET call to use search API


var Yelp = require("yelp-v3");
var client = new Yelp({
	access_token: "access_token"
});

yelp.search({term: 'brunch', location: 'San Francisco', function(error, data) {});





