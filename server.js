var express = require('express');
var app = express();
var router = express.Router();

//app.set('port', 5000);

app.use(express.static(__dirname + '/public'));
app.use(router);


app.listen(5000, function(){
	console.log("Node app is running on port", 5000)
});