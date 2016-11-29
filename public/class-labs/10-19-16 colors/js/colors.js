

// Query Dom
var body = document.querySelector("body");
var ul = document.querySelector("ul");

var circleOne = document.querySelector(".one");
var circleTwo = document.querySelector(".two");
var circleThree = document.querySelector(".three");
var circleFour = document.querySelector(".four");

// Events
// dont need below anymore
// circleOne.addEventListener("click", changeOne);
// circleTwo.addEventListener("click", changeTwo);
// circleThree.addEventListener("click", changeThree);
// circleFour.addEventListener("click", changeFour);

// Adding event listener to parent
ul.addEventListener("click", changeColor); 


// Event Handlers

function changeColor(event) {
	// by console logging this, can dig into mouse e
	// target allows you to get click
	// target is element object

	body.className = event.target.className;

	// return early if li element not clicked
	// if tag name is not equal to LI
	// we learned about this, can dig into
	if (event.target.tagName != "LI") {
		return
	}

	// console logs wont show up if conditional fails
	console.log("sup yall", event);
	// class name allows you to get className of element
	// basically shows how target allows you to see what clicked on
	console.log("class", event.target.className);

}

// dont need these anymore
// function changeOne() {
// 	body.className = "red"
// }


// function changeTwo() {
// 	body.className = "orange"
// }

// function changeThree() {
// 	body.className = "yellow"
// }

// function changeFour() {
// 	body.className = "green"
// }



// class list allows you to toggle on and off classes
// can see what class has with contains 

body.classList.add("red");


// className is really handy at adding one class
// otherwise classes get added (even though shows one)
body.className = "olive"