/*
Symmetric Difference 
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/
/**logical explination
example
array a = [1,2,3]
array b = [2,3,4]
array c = a △ b = [1,4]
array d = [2,3]
c △ d = [1,4,2,3]


we have to create a function that takes arrays as arguments 
function symmetricDifference(){}
1. we call the function with more arguments than what we have  formally declared to accept
symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])

3. since the arguments are not declared when creating the function we have to use arguments object and loop through these argumnets then  push them into an array called argumentsArray

4. Declare a variable for the length of the argumentsArray

5. Declare a variable and asign it to a function that find the difference in the first two arrays only 

6. 

2. loop through the arguments and perform the following:

	- compare the first two arrays first and get the difference
		array[0] △ array[1] and assign the result into a new array called 
3. the result from the first two arrays 



**/
// Code Explination

// es5
// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

//  “Array-like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() and map().

// The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.

// For example, if a function is passed 3 arguments, you can access them as follows:

// arguments[0] // first argument
// arguments[1] // second argument
// arguments[2] // third argument
// Each argument can also be set or reassigned:

// arguments[1] = 'new value';
// The arguments object is not an Array. It is similar, but does not have any Array properties except length. For example, it does not have the pop() method. However, it can be converted to a real Array:

// var args = Array.prototype.slice.call(arguments);
// // Using an array literal is shorter than above but allocates an empty array
// var args = [].slice.call(arguments); 
// As you can do with any Array-like object, you can use ES2015's Array.from() method or spread syntax to convert arguments to a real Array:

// var args = Array.from(arguments);
// var args = [...arguments];
// The arguments object is useful for functions called with more arguments than they are formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments, such as Math.min(). This example function accepts any number of string arguments and returns the longest one:

// function longestString() {
//   var longest = '';
//   for (var i=0; i < arguments.length; i++) {
//     if (arguments[i].length > longest.length) {
//       longest = arguments[i];
//     }
//   }
//   return longest;
// }
// You can use arguments.length to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's length property.

// Using typeof with Arguments
// The typeof operator returns 'object' when used with arguments

// console.log(typeof arguments); // 'object' 
// The type of individual arguments can be determined by indexing arguments:

// console.log(typeof arguments[0]); // returns the type of the first argument


// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.



// es6
// If you're writing ES6 compatible code, then rest parameters should be preferred.
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array
// function f(a, b, ...theArgs) {
//   // ...
// }

// Description
// A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" javascript array. Only the last parameter can be a "rest parameter".

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a); 
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs); 
// }

// myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]

// Difference between rest parameters and the arguments object
// There are three main differences between rest parameters and the arguments object:

// rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function;
// the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
// the arguments object has additional functionality specific to itself (like the callee property).
// From arguments to an array
// Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments

// // Before rest parameters, "arguments" could be converted to a normal array using:

// function f(a, b) {

//   var normalArray = Array.prototype.slice.call(arguments);
//   // -- or --
//   var normalArray = [].slice.call(arguments);
//   // -- or --
//   var normalArray = Array.from(arguments);

//   var first = normalArray.shift(); // OK, gives the first argument
//   var first = arguments.shift(); // ERROR (arguments is not a normal array)

// }

// // Now we can easily gain access to a normal array using a rest parameter

// function f(...args) {
//   var normalArray = args;
//   var first = normalArray.shift(); // OK, gives the first argument
// }

function sym() {
 
 // process arrays
  var arrays = [];
  for(var a in arguments){
  	arrays.push(arguments[a]);
  }
 var originalArraysLength = arrays.length;
 
	console.log(arrays);
	var diffArr = findDiff(arrays[0],arrays[1]);
	
	function findDiff(a,b){
		console.log("---findDIff()---");
		
		
				var arr1, arr2;
				var diffArr = [];
				
				console.log(a);
				console.log(b);
				console.log('\n');
				
				function searchNPush(a, b){
					for (var i in a){
						if (b.indexOf(a[i]) === -1){
							// no match
							console.log(a[i] + " its a difference");
							diffArr.push(a[i]);
						}else{
							console.log(a[i]);
						}
					}
				}
				
				searchNPush(a,b);
				searchNPush(b,a);
				
		if(originalArraysLength===arrays.length){ //uf it is the first iterration
			arrays.splice(0,2);
		}else{
			arrays.splice(0,1);
		}
		console.log("length: " + arrays.length);
		console.log(diffArr);
		
		if(arrays.length>=1){
		
			return findDiff(diffArr, arrays[0]);
		
		}else{
			console.log("array length less than 1");
			
			return diffArr;
			
		}
		
	}// end of func findDiff()
	console.log('\n');
	console.log(diffArr);
	var unique = diffArr.filter(function(elem, index, diffArr) {
		    console.log("index " + index + " elem " + elem + " self " + self);
		    return index == diffArr.indexOf(elem);
	});
	return unique;
}


sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);