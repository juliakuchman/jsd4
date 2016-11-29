var color = "red";
var timerId;
var night = false;

// Starts traffic light in daytime mode
function start() {
	dayMode()
}

// Stops the timer for stop or reset
function stop() {
	clearInterval(timerId);
}

function nightMode() {
	//init
	night = true;
	stop();
	changeYellow();
	//timer
	timerId = setInterval(changeColor, 500)
}

// Starts dayMode
function dayMode(){
	// init
	night = false;
 	stop();
 	// dayTimer
	timerId = setInterval(changeColor, 1000);
}

function changeColor() {
	if (color == "red") {
		changeGreen();
	} 
	else if (color == "green") {
		changeYellow();
	} 
	else if (color == "yellow") {
		if (night) {
			changeOff()
		} else {
			changeRed()
		}	
	} else {
		changeYellow()
	}
}


function changeOff() {
	console.log("Off");
	color = "off";
}

function changeGreen() {
	console.log("Green");
	color = "green";
}

function changeYellow() {
	console.log("Yellow");
	color = "yellow";
}

function changeRed() {
	console.log("Red");
	color = "red";
}

