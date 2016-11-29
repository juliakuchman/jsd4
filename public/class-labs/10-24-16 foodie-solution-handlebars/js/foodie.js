// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");

var restaurantTemplate = document.querySelector("#restaurant-template");

// hoisting, set as global variable
var html;

// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';

/*	
	
	Don't need this anymore
	// add new result for each item in array
	json.restaurants.forEach(createRestaurant);*/

	// Handlebars Step 2: compile the template from HTML source
	var templateFunction = Handlebars.compile(restaurantTemplate.innerHTML);

	// Handlebars Step 3: mix together data and template
	// Need to pass function gained above data 
	// Data is stored in JSON 
	// took out var here, if you set a global variable dont need to reset
	html = templateFunction(json); 
	results.innerHTML = html; 
	// this whole thing is replacing the below create elements 
	// and append child 
}


/*

Don't need this anymore, per the above

function createRestaurant(restaurant) {

	// Step 1 - create elements
	var li = document.createElement("li");
	var img = document.createElement("img");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");

	// Step 2 - add content / attributes
	img.src = restaurant.image_url;
	h2.textContent = restaurant.name;
	p.textContent = restaurant.address;

	// Step 3 - append to parents
	results.appendChild(li);
	li.appendChild(img);
	li.appendChild(h2);
	li.appendChild(p);
}*/

	




