function initMap() {
	console.log('initMap');
}

// Setup the callback when position is determined
// Use the geolocation API
// -----------------------------------

// Elements
// -----------------------------------
var button = document.querySelector("button");
var myLocation = document.querySelector(".my-location");

button.addEventListener("click", getPosition);

// // Events 
// // -----------------------------------

function getPosition(e) {
	navigator.geolocation.getCurrentPosition(updateLocation);
}


function updateLocation(position) {
	console.log("updateLocation");
	console.log(position);

	var latitude = position.coords.latitude; 
	var longitude = position.coords.longitude;

	myLocation.textContent = longitude + "," + latitude;

	createGoogleMap(latitude, longitude)

}

// Google Map APIs part 1

function createGoogleMap(latitude, longitude) {

	var el = document.querySelector('#google-map');

	var options = {
      center: {lat: latitude, lng: longitude},
      zoom: 8
	}

	var map = new google.maps.Map(el, options);

	var marker = new google.maps.Marker({
		map: map, 
		position: {lat: latitude, lng: longitude},
	})

}