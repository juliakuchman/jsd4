// Setup
// ----------------------------------------------

// Elements
var form = document.querySelector("form");
var searchBox = document.querySelector("form .search");
var searchButton = document.querySelector("form button");
var details = document.querySelector(".details");
var results = document.querySelector(".results");

// Templates 
var detailsTemplate = document.querySelector("#detailsTemplate");
var moviesTemplate = document.querySelector("#resultsTemplate");

// Events
// ----------------------------------------------

form.addEventListener('submit', searchMovies);
results.addEventListener('click', getMovieDetails);

// Event delegation involves adding event listener to the parent
// That way don't have to repeat event listeners on children

// Event handlers
// ----------------------------------------------

function searchMovies(event) {
	// still don't understand why is this necessary
    event.preventDefault();
	// set search value equal to what typed in form   
	var search = searchBox.value;
    // add movie to omdb API to search 
    var url = "http://www.omdbapi.com/?s=" + search;
    $.getJSON(url, updateMovies);
    searchBox.value = "";
} ; 

function getMovieDetails(event) {
    var target = event.target.closest("LI");
    var targetId = target.ID;
    var url = "https://www.omdbapi.com/?i=" + targetId; 
    $.getJSON(url, updateMovieDetails);
}


// Update page
// ----------------------------------------------

function updateMovies(json){	
    console.log("updateMovies", json);
	// clear list     
    results.innerHTML = "";
    var templateFn = Handlebars.compile(resultsTemplate.innerHTML);
    results.innerHTML = templateFn(json);
}

function updateMovieDetails(json){
    console.log("updateDetails", json);
    details.innerHTML = "";
    var templateFn = Handlebars.compile(detailsTemplate.innerHTML);
    details.innerHTML = templateFn(json);
}