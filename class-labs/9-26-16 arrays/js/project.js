// console.log("hello world");

// // Variable declaration
// var color; 

// // Variable assignment
// color = "red"

// // Declaration and assignment at same time
// var age = 21;

// // Declaration and not assigned
// var started; 

// creates new array 
var a = [1,2,3,5,8];

// add new item to array using push 
a.push(34);

/**
* Arrays
* Most of your answers should be stored in variables called q1, q2 etc..
* and the variables printed to the console.
*
* For example:
* var q0 = "abc"
* console.log("Question 0" + q0)
*/

//setup 

var total = 0;
a.forEach(add);

function add(number, index){
	total = total + number;
	// console.log(number, index, total);
}



var days = ["Mon", "Tue", "Wed"];

//anonymous function
days.forEach(function(day){
	console.log(day);
});

//generic variable name
//you have to do this for console log for some reason
days.forEach(function(item){
	console.log(item);
});

// loops technique #2 for loop
// first part you set up; second is logic check
// i ++ means i = i + 1
var colors = ["red", "orange", "blue"]; 
for (var i = 0; i < colors.length - 1; i++) {
}

	console.log(colors[0]);
	console.log(colors[1]);
	console.log(colors[2]);


/** Question 1
* Create an array of image source filenames.
* Use "image1.png", "image2.png", and "image3.png" as the array values.
*/

var q1 = ["image1.png", "image2.png", "image3.png"];
console.log("Question 1", q1)


/** Question 2
* Using the array from Question 1, store the first element of the array
* in variable q2.
*/

q2= q1[0];
console.log("Question 2", q2);


/** Question 3
* Get the length of the first array (number of elements in the array)
* and store it in variable q3
*/

q3 = q1.length;
console.log("Question 3", q3);


/** Question 4
* Using the array from Question 1, store the last element of the array
* in variable q4. Hint: How can we get the number of elements in the array?
*/

q4 = q1.pop();
console.log("Question 4", q4);

/**
* Arrays + Iteration
*/

/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/

// calling function addNumber as not to interfere with above 
var numbers = [1, 2, 3, 4]; 

// the first thing referenced is always going to be number
// second thing is always going to be index
numbers.forEach(function(number, index){
	var increasedNumber = number + 1; 
	numbers[index] = increasedNumber;
});
	console.log(numbers);



/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/

q6 = / numbers.length 

