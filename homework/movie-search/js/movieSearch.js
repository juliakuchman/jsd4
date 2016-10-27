// Setup
// ----------------------------------------------

// form where entry and submit button go
var form = document.querySelector("form");

// input tag where you enter the movie 
var movies = document.querySelector(".search");

// ul where results are placed
var results = document.querySelector(".results");

var moviesTemplate = document.querySelector("#movies-template");

// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------

form.addEventListener('submit', searchMovies)

// Event handlers
// ----------------------------------------------

function searchMovies() {

	// is this necessary (?)
    event.preventDefault();

	// set search value equal to what typed in    
	var search = movies.value;
    
    // add movie to omdb API to search 
    var url = "http://www.omdbapi.com/?i=" + search;
    
    // not sure if need i or t
    // t is for movie title, i is for IMDb ID 


    // get data from API, run updateList
    
    // need to fix this... 
    $.getJSON(url, updateList);
}

// Update page
// ----------------------------------------------

function updateList(json){
	
    console.log("update list", json);

	// clear list     
    results.innerHTML = '';

    // loop through to addMovies
    // getting an error here, says json is undefined
    json.movies.forEach(addMovies);
    
/*    //Handlebars
    var fnTemplate = Handlebars.compile(moviesTemplate.innerHTML);
    var html = fnTemplate(json);
    results.innerHTML = html;*/
    
}

function addMovies(movies){
    // create elements 
    var li = document.createElement("li");
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    
    // set value of content
    img.src = movies.Poster;
    h2.textContent = movies.Title;
    
    results.appendChild(li)
    li.appendChild
}