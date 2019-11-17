// In order to get the last letter of a string, you can subtract one from the string's length.

// For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[ lastName.length -1 ];
var secondToLastLetterOfLastName = lastName[lastName.length-2];
var thirdToLastLetterOfLastName = lastName[lastName.length-3];

console.log(lastLetterOfLastName);
console.log(secondToLastLetterOfLastName);
console.log(thirdToLastLetterOfLastName);