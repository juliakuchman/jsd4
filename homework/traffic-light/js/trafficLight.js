// Setup
// ----------------------------------------------

var cautionID = null;
var runId = null;

// Query DOM
// Not sure if need to add control 
var stopButton = document.querySelector(".control.stop-button");
var slowButton = document.querySelector(".control.slow-button");
var goButton = document.querySelector(".control.go-button");
var cautionButton = document.querySelector(".control.caution-button");

var trafficLight = document.querySelector("#traffic-light");


/*var stopLight = document.querySelector(".light.stop-light");
var slowLight = document.querySelector(".light.slow-light");
var goLight = document.querySelector(".light.go-light");*/


// Structure
// ----------------------------------------------

/*var stopClasses = stopLight.classList; 
var slowClasses = stopLight.classList; 
var goGlasses = stopLight.classList; 
*/

// Events
// ----------------------------------------------

// Event Listeners 
stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);

// Event handlers
// ----------------------------------------------

/*	div.classList.remove("foo");
	div.classList.add("anotherclass");*/

/*	
	This didnt work... 
	stopLight.classList.remove("light");
	stopLight.classList.add("stop");*/

/*	Same with this
	stopLight.innerHTML = ".light .stop .stop-light";

*/

function stop() {
	trafficLight.classList.add("stop");
	trafficLight.classList.remove("slow");
	trafficLight.classList.remove("go");
}

function slow() {
	trafficLight.classList.remove("stop");
	trafficLight.classList.add("slow");
	trafficLight.classList.remove("go");
}

function go() {
	trafficLight.classList.remove("stop");
	trafficLight.classList.remove("slow");
	trafficLight.classList.add("go");
}

function caution() {
	trafficLight.classList.remove("stop");
	trafficLight.classList.add("slow");
	trafficLight.classList.remove("go");
	if (cautionID === null) {
		
	}
}

}