
// Setup 
// -----------------------------------
var json = {
	"active": "red",
	"colors": [
		"red", 
		"olive",
		"rebeccapurple",
		"skyblue"
	]
}

// Establish a connection with firebase
// Create a new firebase db reference
// -----------------------------------


// grabbed this link from firebase
// also needed to reference firebase link in html
var ref = new Firebase("https://learning-firebase-d3cab.firebaseio.com");


// Elements
// -----------------------------------

var button = document.querySelector("button");



// Events
// -----------------------------------

button.addEventListener("click", saveChanges); 


function saveChanges(e) {
	console.log("save changes");
	ref.set(json);
}


ref.on("value", updateApp);


function updateApp(snapshot) {
	var value = snapshot.val();

	// has it so code becomes this background 
	document.body.style.background = json.active;
}
