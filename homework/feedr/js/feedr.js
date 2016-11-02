
// Priorities
	// Get data from APIs
	// Lots of error check to do 
		// to make sure clicking and selecting right thing
		// need inspect element? idk
	// Setup handlebars for each API



// Setup

	// Search Class
var searchClass = document.querySelector("#search");
	// Seach Value
var searchValue = document.querySelector(".searchValue");

	// API Source Names
var sourceOne = document.querySelector(".sourceOne"); 
var sourceTwo = document.querySelector(".souceTwo"); 
var sourceThree = document.querySelector(".sourceThree"); 

	// Article Detail and URl Referenced
/*Clicking/tapping on one of the articles will load a pop up 
with more information. The user from that point will be 
able to either dismiss the additional information or 
go to the referenced article.*/

	// Feedr Logo to Default Feed
var feedrIcon = document.querySelector(".feedrIcon");

	// Pop-up Display 
var popUp = document.querySelector("#popUp");

/*When the app is first loading and when the user selects 
to load a new feed from the dropdown, display the #popUp 
container with the .loader class. 
You can toggle the .hidden class from the container 
to display/hide the overlay container.*/

var popUpX = document.querySelector(".closePopUp"); 
/*Add functionality to hide the pop-up when user selects 
the “X” button on the pop-up.
Clicking/tapping the “Feedr” logo will display the 
main/default feed.*/


// Event Functions
sourceOne.addEventListener("click", sourceOneRequest);
sourceTwo.addEventListener("click", sourceTwoRequest);
sourceThree.addEventListener("click", sourceThreeRequest);

searchClass.addEventListener("click", showSearchBar);

feedrIcon.addEventListener("click", runDefaultFeed)

popUpX.addEventListener("click", closePopUp)

// Event Handler Functions 

function showSearchBar() {

	// need to push the active class to the search container

}; 


function runDefaultFeed() {

};

function closePopUp() {

	// need to add the hidden class to the popup area
};


// The Guardian
function sourceOneRequest() {
	e.preventDefault();


}; 

function sourceTwoRequest() {

}; 

function sourceThreeRequest() {

/*News API Key
06b5a3abc80a436d830258cf4c8e5a20
*/

}; 


// Add New Data to DOM 
// ------------------------------------------------------






// Handlebars 
// ------------------------------------------------------
/*// Step 1: Get Elements from DOM & Where are going
var articleTemplate = document.querySelector("#article-template");
var mainArticlesSection = document.querySelector(".main");

// Step 2: Complile Handlebars Template
var articlesTemplateFn = Handlebars.compile(articleTemplate.innerHTML);

// Step 3: Put back in DOM
var articleHtml = articlesTemplateFn(DATA);
set inner html of actual html = articleHTML*/





