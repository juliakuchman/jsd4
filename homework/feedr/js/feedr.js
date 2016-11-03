// Setup

	// Search Class
var searchForm = document.querySelector("#search");
	// Seach Value
var searchValue = searchForm.querySelector("[type=text]");

var searchBox = document.querySelector("a");

	// API Source Names
var sourceOne = document.querySelector(".sourceOne"); 
var sourceTwo = document.querySelector(".souceTwo"); 
var sourceThree = document.querySelector(".sourceThree"); 

var displayResults = document.querySelector("#main");

	// Article Detail and URL Referenced
/*Clicking/tapping on one of the articles will load a pop up 
with more information. The user from that point will be 
able to either dismiss the additional information or 
go to the referenced article.*/

// Need something to grab title names
var articleTitle = document.querySelector("#news-source-title");

	// Pop-up Display for more info
var popUp = document.querySelector("#popUp");
var popUpContainer = popUp.querySelector(".container");

	// Feedr Logo to Default Feed
	/*Clicking/tapping the “Feedr” logo will display the 
main/default feed*/
var feedrIcon = document.querySelector(".feedrIcon");

/*Add functionality to hide the pop-up when user selects 
the “X” button on the pop-up.*/
// var popUpX = popUp.querySelector(".closePopUp"); 


// may need to add global variables 
var url = ""; 



// Event Functions

searchBox.addEventListener("click", showSearchBar);

/*searchForm.addEventListener("click", getNews); */

/*sourceOne.addEventListener("click", sourceOneRequest);*/
sourceTwo.addEventListener("click", sourceTwoRequest);
/*sourceThree.addEventListener("click", sourceThreeRequest);*/

feedrIcon.addEventListener("click", runDefaultFeed);

displayResults.addEventListener("click", getArticleDetails);

popUpX.addEventListener("click", closePopUp);


// Event Handler Functions 

	// shows search bar when clicks seachBox
function showSearchBar() {
	if (searchForm.className == "active") {
		searchForm.className = "";
	}
	else {
		searchForm.className = "active"
	}
}; 

	// toggles popup when clicks popUpX 
function closePopUp() {
	if (!popUp.classList.contains("loader")) {
		popUp.classList.toggle("loader");
	}
	popUp.classList.toggle("hidden");
};


function runDefaultFeed() {

};


/*// The Guardian
function sourceOneRequest() {
	e.preventDefault();
	url = http://content.guardianapis.com/api-key=3bc291b2-246b-4c24-8b82-9258930f47f7"
}; */

function sourceTwoRequest() {
	url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=06b5a3abc80a436d830258cf4c8e5a20";
	$.getJSON(url, processArticles)
} 

/*function sourceThreeRequest() {
*/
/*News API Key
06b5a3abc80a436d830258cf4c8e5a20

};*/ 

//

function processArticles() {
	fnTemplate = Handlebars.compile(newsTemplate.innerHTML);
}


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

