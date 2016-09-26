
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////


// Fahrenheit and Celcius
function calcFahrenheitToCelcius(fahrenheit) {
return Math.round((fahrenheit - 32) * 5/9);
}

// Celcius to Fahreneit 
function calcCelciusToFarenheit(celcius) {
return Math.round((celcius * (9/5)) + 32);
}

// Radius to Circumference
function calcCircumference(radius) {
return 2 * Math.PI * radius;

}

//Pythagorean Theorem
function calcLongestSide(a,b){
return Math.sqrt((a * a) + (b * b));

}