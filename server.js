
// SETUP
// ------------------------------------
var express = require('express');
var app = express();
var router = express.Router();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



// YELP SETUP
var client;

var request = require('request');
var Yelp = require("yelp-v3");

request({
    // will be ignored
    method: 'GET',
    uri: 'https://api.yelp.com/oauth2/token',

    // HTTP Archive Request Object
    har: {
        url: 'https://api.yelp.com/oauth2/token',
        method: 'POST',
        headers: [
            {
                name: 'content-type',
                value: 'application/x-www-form-urlencoded'
            }
        ],
        postData: {
            mimeType: 'application/x-www-form-urlencoded',
            params: [{
                name: 'grant_type',
                value: 'client_credentials'
            },/*{
                name: 'client_id',
                value: 'OJF1bB2nbTZdhFnGdC6R0Q'
            },{
                name: 'client_secret',
                value: 'rFeUwtPqFNxBFkSNJo4UMsfioZyIZdsti1tHcMJcEFP02b8v6bRkIQZ7qtcdjufL'
            }*/]
        }
    }
}, function(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        // console.log(response.statusCode, body);
        var json = JSON.parse(body);
        console.log('access_token',json.access_token);

        client = new Yelp({
			access_token: json.access_token
		});
    }
});


// ROUTES
// ------------------------------------

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/brunch-roulette', function(req, res) {
    res.render('brunch-roulette');
});

router.get('/search', function(req, res) {

	client.search({
	    term: 'brunch',
	    location: 'San Francisco',
	}).then(function(data) {
		res.send(data)
	})
	  .catch(function(error) {
		console.log(error)
	});

});

app.use("/", router);

app.listen(app.get("port"), function() {
	console.log("hello")
});






