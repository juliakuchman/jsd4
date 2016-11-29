// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');

var html; 

// Templates
// ------------------------------------------

var dateTemplate = document.querySelector("#date-template");
var gameTemplate = document.querySelector("#game-template");


// Update function 

function updateDate() {

	var dateFunction = Handlebars.compile(mockdata.innerHTML);
	mockdata = dateFunction.innerHTML;

	html = dateFunction();
}

/*
function updateGame = {

}*/