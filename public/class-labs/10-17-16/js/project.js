
// api
// get random gif
// - pass tag argument 

function getGif(tag) {

// need to get this 
var url = asdjlasdf + tag
jQuery.getJSON(url, handleCats);


}

// callback function 
function handleCats(json) {
	console.log("handleCats", json)

var img = document.createElement("img");
// need to dig into JSON 
img.src = json.data.image_url;
document.body.appendChild(img);

} 