// Elements
// ------------------------------------------

// Query DOM
var ul = document.querySelector(".song");

// Update Function 
function generateSong(numberBottles) {
	var song = "";
	for (i= numberBottles; i>=0 ; i--) {
	
	if (i==0) {
			song = "No more bottles of beer on the wall, no more bottles of beer." +
			"<br> Go to the store and buy some more, 99 bottles of beer on the wall.<br><br>";
		}
	
	else if (i==1 ) {
			song = i + " bottle of beer on the wall, " + i + " bottle of beer. " + 
			"<br> Take one down and pass it around, no more bottles of beer on the wall.<br><br>";
	}

	else if (i==2) {
		song = i + " bottles of beer on the wall, " + i + " bottles of beer. " + 
			"<br> Take one down and pass it around, " + (i-1) + " more bottle of beer on the wall.<br><br>";
	}

	else {
		song = i + " bottles of beer on the wall, " + i + " bottles of beer. " + 
		"<br> Take one down and pass it around, " + (i-1) + " more bottles of beer on the wall.<br><br>";
		}	

// Create New Element
	li = document.createElement("li");
// Update Element
	li.innerHTML = song; 
// Add Element to DOM
	ul.appendChild(li);
	console.log("appended children", song);

	}
}

generateSong(99);




// Update page
// ------------------------------------------

console.log("99 bottles of beer on the wall!");