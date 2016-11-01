// Mock Data
const mockData = {
    pagination: {
        total_count: 37
    },
    data: [{
        id: "feqkVgjJpYtjy",
        url: "http://giphy.com/gifs/eyes-shocked-bird-feqkVgjJpYtjy",
        rating: "g",
        images: {
            original: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif"
            }
        }
    },{
        id: "FiGiRei2ICzzG",
        url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
        rating: "g",
        images: {
            original: {
                url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif"
            }
        }
    }]
};

// HANDLEBARS
// -----------------------------------

// Step 1 - get template source HTML from DOM
	// template
var gifTemplate = document.querySelector("#gif-template");
	// placeholder for where new gifs go in DOM
var gifs = document.querySelector(".gifs");

// Step 2 - compile the handlebars template
	// need to pass the template function a string version of template
var gifTemplateFn = Handlebars.compile(gifTemplate.innerHTML);

// Step 3 - pass JSON data to template
// Put final HTML back into DOM

var html = gifTemplateFn(mockData);
gifs.innerHTML = html;


// Events 
// -----------------------------------
