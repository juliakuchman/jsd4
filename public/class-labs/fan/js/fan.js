// Firebase application setup
// ------------------------------------------------

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDoXYkUUCNYLEjREo9HCg9vW51Bao01b7k",
	authDomain: "beyoncefan-db75f.firebaseapp.com",
	databaseURL: "https://beyoncefan-db75f.firebaseio.com",
	storageBucket: "beyoncefan-db75f.appspot.com",
	messagingSenderId: "139526157579"
	};

firebase.initializeApp(config);


// Elements
// ------------------------------------------------
var db = firebase.database();

var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");

// Events
// ------------------------------------------------
form.addEventListener("submit", submitForm);
// dis is something to do with page loads
// involved in listenting to database change
document.addEventListener("DOMContentLoaded", loadState);

// Event handlers get passed an event
// Use prevent default with forms
function submitForm(event) {
	event.preventDefault();
	var messageText = messageEl.value;
	console.log(messageText);
	messageEl.value = "";


//reference to database at this path
	var ref = db.ref("messages");
// similar to an array push
	
	var messageObj = {
		content: messageText,
		votes: 0
	};

	ref.push(messageObj);
}

function loadState() {
	db.ref("messages").on("value", createMessages)
}

function createMessages(results) {
	console.log("createMessages", results.val())
	// interpreting results
	var newMessages = results.val();
	// reset message board
	messageBoard.innerHTML = ""; 
	for (var id in newMessages) {
		console.log(id);
		//passing id
		createMessage(id, newMessages[id]);
	}

}

function createMessage(id, messageEl) {
	var li = document.createElement("li");
	li.innerHTML = messageEl.content;
	li.id = message.id;
	messageBoard.appendChild(li); 
	li.addEventListener("click", destroyMessage);
}

// remove by calling destoy message and passing the ID in console
function destroyMessage(id) {
	// find message with object id equal to id searching for 
	var ref = db.ref("messages/");
	ref.remove();
}


// Create Firebase application reference
// ------------------------------------------------
