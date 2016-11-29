// Elements
// ------------------------------------------
var form = document.querySelector("body form");
var things = document.querySelector(".things");


// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');

	// get the input from the DOM
	var thing = document.querySelector(".new-thing");

	// Error checking
	// Return early if form is blank
	if (!thing.value) {
		alert("You must type in a value!");
		return;
	}

	// Validation - check if too long
	// "Return early"
	if (thing.value.length > 140) {	
		alert("Things must be 140 characters or less!");
		return;
	}

	// Step 1: create the element
	var li = document.createElement("li");

	// Step 2: add content & attributes
	li.innerHTML = thing.value;

	// Step 3: add the new element to the DOM
	things.appendChild(li);

	// Cleanup
	thing.value = "";

}

