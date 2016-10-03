// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Elements
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Init
// ------------------------------------------
generateStartup();


// Event Listeners
// ------------------------------------------


// the generateStartup function is called when
// the "Generate New Startup" button is clicked
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
	// finding this random number thing a little tricky
	// right now have these setup so the index is showing w/-1
	var random1 = Math.round((Math.random()*startupX.length))-1;
	var random2 = Math.round((Math.random()*startupY.length))-1;


	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	startupIdea = "A startup that is " + startupX[random1] + ", but for "+ startupY[random2];
	console.log(startupIdea);

	// DONE: Update page with new startup idea
	startup.innerHTML = startupIdea;
}



// the saveFavorite function is called when
// the "Save Favorite" button is clicked
function saveFavorite() {

	// TODO: add the new idea to the array
	var newIdea = startupIdea;

}



// the Print Favorites function is called when
// the "Print Favorites" button is clicked
function printFavorites() {
	// DONE: clear out favorites section each time
	// before displaying new list of favorites
	list.innerHTML = '';


	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")



	// DONE: update the list element with the
	// new list of favorites
	list.innerHTML = favoritesText;
}
