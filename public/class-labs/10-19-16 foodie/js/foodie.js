// Elements
// ------------------------------------

// Prevent default: In old days, had forms, links, buttons
// When submitted, posted to server and would refresh to new page
// Same as when clicked something
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");

// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);

// Event Handler 
// ------------------------------------

function getRestaurants(e) {
	// preventing default
	// supress events, forms, and buttons if need
	e.preventDefault();
	console.log(zip.value);
	var search = zip.value;
	// this is cool!
	// leaves a place in params for value submitting
	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
	jQuery.getJSON(url, updatePage);
	zip.value = "";
}

// Update page
// ------------------------------------

// fun tab has shortcut
function updatePage(json) {
	console.log("update restaurant", json);
	json.restaurants.forEach(createRestaurants);
}

function createRestaurants(restaurant) {

	
	console.log(restaurant.name);
}



