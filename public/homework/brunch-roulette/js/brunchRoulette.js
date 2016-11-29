
// ELEMENTS
// ---------------------------------------------------
var submitButton = document.querySelector(".ready");
var zipCode = document.querySelector("form .zip");
var brunchLocation = document.querySelector(".brunchLocation");
var redoButton = document.querySelector(".newSpot");
sfZips = [94129, 94123, 94109, 94133, 94111, 94108, 94105, 94102, 94103, 94107, 94158, 94121, 94118, 94115, 94112, 94117, 94114, 94116, 94132, 94127, 94131, 94112, 94134, 94124, 94110];

	// hoisting
var html = ""


// EVENTS
// ---------------------------------------------------
//submitButton.addEventListener("click", findBrunchSpot);
redoButton.addEventListener("click", selectRandomBrunch)


// EVENT HANDLER
// ---------------------------------------------------
/*function findBrunchSpot(event) {
	event.preventDefault();
	if (zipCode.value != sfZips) {
		alert("Please enter valid SF zip code")
	}
	var zipSent = zipCode.value;
	var url = "https://api.yelp.com/v2/search?term=brunch&location=" + zipSent;
	$.getJSON(url, renderBrunchSpot);
}*/

function selectRandomBrunch(json) {
	brunchLocation.innerHTML = "";

	// there is a field called total in the API 
	// gives # or rests. could do random # in array of that
	
	// May need to generate a random number so that same rest
	// not pulled each time for each zipcode
};


// To get data
// ---------------------------------------------------

$.getJSON("/search").then(function(data){
	
	console.log(data.businesses[0]);
	var yelpData = data.businesses;
	var name = data.businesses.name

});



// UPDATE PAGE 
// ---------------------------------------------------
function renderBrunchSpot(json) {
	brunchLocation.innerHTML = "";
	var brunchTemplateFunction = Handlebars.compile(brunchTemplate.innerHTML);
	html = brunchTemplateFunction(json);
	brunchLocation.innerHTML = html;
}



