// 7.2 Array Object
// JavaScript arrays are a special kind of object, and are created dynamically. An array object contains a number of variables. The number of variables may be zero, in which case the array is said to be empty. 

//The variables contained in an array have no names; instead they are referenced by array access expressions that use nonnegative integer index values. 

//These variables are called the components of the array. If an array has n components, we say n is the length of the array; the components of the array are referenced using integer indices from 0 to n-1, inclusive.

//An array component can itself be an array, to create essentially multi-dimensional arrays. If, starting from any array type, one considers its component type, and then (if that is also an array type) the component type of that type, and so on, eventually one must reach a component type that is not an array type; the components at this level of the data structure are called the elements of the original array.


// 7.2.1 Constructors
// To create an Array object:


// ArrayConstructor:
//           new Array()
//           new Array(arrayLength)
//           new Array(componentList)

// componentList:
//           componentValue, componentList
//           componentValue

// componentValue:
//           Identifier
//           Literal
// IdentifierName is an identifier that is the name of the new Array object.

// arrayLength is a positive integer-valued numeric expression that specifies the initial length of the Array and becomes the value of the Array object's length property. An arrayLength specified to be zero or less results in a run-time error. An arrayLength that is not an integer is truncated to an integer.

// For example,


a = new Array("alpha", "beta", "gamma", "delta")
b = new Array("a", "b", "c", "d")
matrix = new Array(a, b)
for (i = 0; i < a.length; i++) {
          for (j = 0; j < a[i].length; j++) {
          //console.log(a[i][j]) 
          }
}
c = new Array(5);

//console.log(c); //[ <5 empty items> ]


// 7.2.2 Properties
// An Array object has one property, length.


// 7.2.2.1 length
// The length property indicates the number of components in an Array object. See the definition of components versus elements in section 1.1. The syntax is:


// arrayObject.length
// arrayObject is an Array object.


// 7.2.3 Methods
// The Array object has three methods:


// join: Joins all elements of an array into a string.

// reverse: Reverses elements of an array

// sort: Sorts elements of an array based on a specified comparison function.

// 7.2.3.1 join
// Returns a string containing all the elements of the array. Syntax:


// arrayName.join(separator)
// arrayName is the name of an Array object.
// separator specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, a comma (,) is used by default.


// 7.2.3.2 reverse
// Reverses the elements of an array: the first array element becomes the last and the last becomes the first. Returns ? The effect of this method is to change the calling object.

// Syntax:


// arrayName.reverse()
// arrayName is the name of an Array object.


// 7.2.3.3 sort
// Sorts the elements of an array. Syntax:


// arrayName.sort(compareFunction)
// arrayName.sort()
// arrayName is the name of an Array object.
// compareFunction is the name of a function that defines the sort order. It must be a function defined in the current program, a method of a built-in object, or a built-in function.

// If omitted, the array is sorted lexicographically (in dictionary order) according to the string conversion of each element.

//If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

//Return value
//The sorted array. Note that the array is sorted in place, and no copy is made.

// he sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
//console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// Syntax
// arr.sort([compareFunction])
// Parameters
// compareFunction Optional
// Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
// firstEl
// The first element for comparison.
// secondEl
// The second element for comparison.
// Return value
// The sorted array. Note that the array is sorted in place, and no copy is made.

// Description
// If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

// Note : In UTF-16, Unicode characters above \uFFFF are encoded as two surrogate code units, of the range \uD800-\uDFFF. The value of each code unit is taken separately into account for the comparison. Thus the character formed by the surrogate pair \uD655\uDE55 will be sorted before the character \uFF3A.

// If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:

// If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
// So, the compare function has the following form:

// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
// To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//example array 
var arr = [2,4,3,5,2,6,1]

// compare function 
function compareNumbers(a, b) {
  return a - b;
}

arr.sort(compareNumbers)

let arrES5 = [4,6,5,4,32,4]
//ES2015 arrow function expression 
const compareNumbersES5 = (a , b) => a - b;
arrES5.sort(compareNumbersES5)

console.log(arrES5);

//sort an array of objects
var students = [
  { name: 'John', age:10 },
  { name: 'Jono', age:11 },
  { name: 'Jane', age:20 },
  { name: 'Jon', age:30 },
  { name: 'Lila', age:15 },
  { name: 'Lola', age:43 }
]

//sort by name
students.sort(function ( a , b ){
  var nameA = a.name.toUpperCase(); //ignore upper and lower cases
  var nameB = b.name.toUpperCase(); //ignore upper and lower cases
  if ( nameA < nameB ){
    return -1;
  }
  if ( nameA > nameB ){
    return 1;
  }
  return 0; //names must be equal
});
console.log(students)

//sort by age
students.sort(function(a,b){
  return a.age - b.age
})
console.log(students)

const sortIndexNumber = (a,b)=> a[1]-b[1];
const sortAge = (a,b)=> a.age-b.age;

students.sort(sortAge);


console.log(students)

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

console.log('--** stringArray **--: ');
console.log('\n',stringArray);
console.log('-- string array joined --\n', stringArray.join());
console.log('-- string array sorted --\n', stringArray.sort());
console.log('-- string array sorted then joined --\n', stringArray.sort().join());
console.log('\n');
console.log('--** numberArray **--: ');
console.log('\n',numberArray);
console.log('-- number array joined -- \n', numberArray.join());
console.log('-- number array sorted without a compareNumbers function --\n', numberArray.sort());
console.log('-- number array sorted with a compareNumbers function --\n', numberArray.sort(compareNumbers));