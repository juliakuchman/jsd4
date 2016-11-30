
// ELEMENTS
// ---------------------------------------------------

// Can I put this in Node? 
	// Need to do preZip.value to get text
/*var preZip = document.querySelector("form .zip");
*/

var submitButton = document.querySelector(".ready");
var redoButton = document.querySelector(".newSpot");

// This was meant to be for error checking
sfZips = [94129, 94123, 94109, 94133, 94111, 94108, 94105, 94102, 94103, 94107, 94158, 94121, 94118, 94115, 94112, 94117, 94114, 94116, 94132, 94127, 94131, 94112, 94134, 94124, 94110];

// For Handlebars 
var brunchTemplate = document.querySelector("#brunchTemplate")
var results = document.querySelector(".results");

// hoisting
	var html;
	var yelpData;
	var name;
	var image;
	var yelpReviews;
	var zip;

	var myData;
	var myDataArray = [];
	var array;
	var returnArray = [];
	var randomArray = [];

	var randomNumber;
	var jsonString;
	var jsonTwo;


// EVENTS
// ---------------------------------------------------
	// should change this
	// have to call in console? not working with click
submitButton.addEventListener("click", renderBrunchSpot);
	

redoButton.addEventListener("click", renderBrunchSpot);


// EVENT HANDLER
// ---------------------------------------------------

// takes zip code from the form
function findBrunchSpot(event) {
	event.preventDefault();
	/* trying to do error checking for if not an SF zip code
	create a failed array
	if array[i]
	if (preZip.value === sfZips) {
		alert("Please enter valid SF zip code")
	}*/
	var zipCode = preZip.value;
	console.log("zip code submitted", zipCode)
};

// generate random number from within array
function selectRandomBrunch(json) {
/*	var randomValue = Math.round((Math.random()*5+1)); */

};

// To get data
// ---------------------------------------------------

// Getting data from search
$.getJSON("/search").then(function(data){
	myData = data;
	// Putting data in array so can have length
	myDataArray.push(myData.businesses);

// variables we want - don't need this with handlebars
/*	var yelpName = myDataArray[0][0].name;
	console.log(yelpName);

	var yelpImageUrl = myDataArray[0][0].image_url;
	console.log(yelpImageUrl);

	var yelpPage = myDataArray[0][0].url;
	console.log(yelpPage);

	var yelpAddress = myDataArray[0][0].location.address1;
	console.log(yelpAddress);

	var yelpZip = myDataArray[0][0].location.zip_code;
	console.log(yelpZip);*/

	// right now this is just pulling up all brunch spots

});

// UPDATE PAGE 
// ---------------------------------------------------

function renderBrunchSpot(myData) {
	console.log("clicked");
	results.innerHTML = "";
	var brunchTemplateFunction = Handlebars.compile(brunchTemplate.innerHTML);
	// need to pass this json 
	html = brunchTemplateFunction(myData);
	results.innerHTML = html;
};

/*
// attempt at handlebars while incorporating random array 
// and also narrowing down what shows up
function pickRandom(myData) {
//	console.log("renderBrunchSpot", myData);
	// making an array so can pick random entry
	returnArray.push(myData.businesses);
	// this is random array
	// need to make sure random number is integer
	// pass randomNumber var at second digit 
	randomArray = returnArray[0][6];
	// array turned to string
	jsonString = JSON.stringify(randomArray);
	// string turned to json object
	jsonTwo = JSON.parse(jsonString);
	console.log("jsonTwo", jsonTwo);
};

function renderBrunchSpot(jsonTwo) {
	results.innerHTML = "";
	var brunchTemplateFunction = Handlebars.compile(brunchTemplate.innerHTML);
	// need to pass this json 
	html = brunchTemplateFunction(jsonTwo);
	results.innerHTML = html;
};*/


/*// create elements and update page - don't need this with handlebars
	var div = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");

	div.innerHTML = yelpName;
	div2.innerHTML = yelpImageUrl;
	div3.innerHTML = yelpPage;
	div4.innerHTML = yelpAddress;
	div5.innerHTML = yelpZip;
	
	var body = document.querySelector(".results");

	body.appendChild(div);
	body.appendChild(div2);
	body.appendChild(div3);
	body.appendChild(div4);
	body.appendChild(div5);
*/
