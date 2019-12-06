// Built-in Functions and Objects
/**  - JavaScript has several "top-level" built-in functions. 
JavaScript also has four built-in objects: Array, Date, Math, and String. Each object has special-purpose properties and methods associated with it. JavaScript also has constructors for Boolean and Number types.
*/ 

// 7.1 Built-in functions
// JavaScript has five functions built in to the language. They are eval, parseInt, parseFloat, escape, and unescape.


// 7.1.1 eval
// Evaluates a string and returns a value.


// eval(Expression)
// Expression is evaluated, and if the result is not a string, the result is returned.

// If the result is a string, it is taken to be a JavaScript program, and it is evaluated. If the program completes normally, eval returns the value of the last expression in it.

// The scope of execution is determined as described in 5.2 This.


// Examples
// Both of the println statements below display 42. The first evaluates the string "x + y + 1," and the second evaluates the string "42."


// var x = 2
// var y = 39
// var z = "42"
// println(eval("x + y + 1")) 
// println(eval(z))
// In the following example, the getFieldName function returns a string value that may represent a number or string. The second statement below uses eval to display the value of the form element.


// var field = getFieldName(3) 
// println("Field named ", field, " has value of ", eval(field + ".value"))
// The following example uses eval to evaluate the string str. This string consists of JavaScript statements that do different things, depending on the value of x. When the second statement is executed, eval will cause these statements to be performed, and it will also evaluate the set of statements and return the value that is assigned to z.


// var str = "if (x == 5) {z = 42; println("z is" + z);} else z = 0; "
// println("z is " + eval(str))

// 7.1.2 parseInt
// Parses a string argument and returns an integer of the specified radix or base. Syntax:


// parseInt(string)
// parseInt(string, radix)
// string is a string that represents the value you want to parse.
// radix is an integer that represents the radix of the return value.

// The parseInt function parses its first argument, a string, and attempts to return an integer of the specified radix (base). For example, a radix of ten indicates to convert to a decimal number, eight octal, sixteen hexadecimal, and so on. For radixes above ten, the letters of the alphabet indicate numerals greater than ninr. For example, for hexadecimal numbers (base sixteen), A through F are used. If a radixes above 36 is specified, parseInt returns "NaN."

// If parseInt encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. parseInt truncates numbers to integer values.

// If the radix is not specified or is specified as zero, JavaScript assumes the following:


// If the input string begins with "0x," the radix is sixteen (hexadecimal).

// If the input string begins with "0," the radix is eight (octal).

// If the input string begins with any other value, the radix is ten (decimal).
// If the first character cannot be converted to a number, parseFloat returns "NaN".

// For example, the following examples all return fifteen:


// parseInt("F", 16)
// parseInt("17", 8)
// parseInt("15", 10)
// parseInt(15.99, 10)
// parseInt("FXX123", 16)
// parseInt("1111", 2)
// parseInt("15*3", 10)
// The following examples all return "NaN" or zero:


// parseInt("Hello", 8)
// parseInt("0x7", 10)
// parseInt("FFF", 10)
// Even though the radix is specified differently, the following examples all return seventeen because the input string begins with "0x."


// parseInt("0x11", 16)
// parseInt("0x11", 0)
// parseInt("0x11")

// 7.1.3 parseFloat
// Parses a string argument and returns a floating point number. Syntax:


// parseFloat(string)
// string is a String object or literal.

// parseFloat parses its argument, a string, and returns a floating point number. If it encounters a character other than a sign ( + or -), numeral (0-9), a decimal point, or an exponent, then it returns the value up to that point and ignores that character and all succeeding characters.

// If the first character cannot be converted to a number, parseFloat returns "NaN".

// You can call the isNaN function to determine if the result of parseFloat is "NaN." If "NaN" is passed on to arithmetic operations, the operation results will also be "NaN."

// For example, the following examples all return 3.14:


// parseFloat("3.14")
// parseFloat("314e-2")
// parseFloat("0.0314E+2")
// var x = "3.14"
// parseFloat(x)
// The following example returns "NaN":


// parseFloat("FF2")

// 7.1.4 escape
// Returns the hexadecimal encoding of an argument in the ISO Latin-1 character set. Syntax:


// escape("string")
// string is a string in the ISO Latin-1 character set.

// The value returned by the escape function is one of the following:


// For alphanumeric characters, the same character (i.e. the function has no effect).

// For the space character, a + sign.

// For non-alphanumeric characters other than space, a string of the form "%xx," where xx is the hexadecimal encoding of the ASCII character in the ISO Latin-1 character set.
// For example, the following returns "abc%26%25":


// escape("abc&%")

// 7.1.5 unescape
// Returns the ASCII string for the specified value. Syntax:


// unescape("string")
// string is a String object or literal.

// For each distinct set of characters in the argument string of the following form


// "%integer", where integer is a number between 0 and 255 (decimal)

// "hex", where hex is a number between 0x0 and 0xFF (hexadecimal)
// unescape returns the corresponding ASCII character in the ISO Latin-1 character set. For characters not in the above form, unescape returns the characters unmodified; except for the + character, for which a space is returned.

// For example, the following returns "&":


// unescape("%26")
// The following example returns "ab!#":


// unescape("ab%21%23")

// 7.2 Array Object
// JavaScript arrays are a special kind of object, and are created dynamically. An array object contains a number of variables. The number of variables may be zero, in which case the array is said to be empty. The variables contained in an array have no names; instead they are referenced by array access expressions that use nonnegative integer index values. These variables are called the components of the array. If an array has n components, we say n is the length of the array; the components of the array are referenced using integer indices from 0 to n-1, inclusive.

// Unlike Java, the components of an array do not neccessarily have the same type. An array component can itself be an array, to create essentially multi-dimensional arrays. If, starting from any array type, one considers its component type, and then (if that is also an array type) the component type of that type, and so on, eventually one must reach a component type that is not an array type; the components at this level of the data structure are called the elements of the original array.


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


// a = new Array("alpha", "beta", "gamma", "delta")
// b = new Array("a", "b", "c", "d")
// matrix = new Array(a, b)
// for (i = 0; i < a1.length; i++) {
//           for (j = 0; j < a1[i].length; j++) {
//           println(a1[i][j]) 
//           }
// }
// The ouput of this script is:


// alpha
// beta
// gamma
// delta
// a
// b
// c
// d

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


// 7.3 Boolean Object
// The Boolean object represents a primitive boolean value.


// 7.3.1 Constructors
// The Boolean constructor creates an object with a Boolean value.


// BooleanConstructor:
//           new Boolean(BooleanLiteral)
//           new Boolean()
// If no argument is provided, then the constructor creates a object with Boolean value false.


// 7.3.2 Properties
// The Boolean object has no properties.


// 7.3.3 Methods
// The Boolean object has toString and valueOf methods.


// 7.4 Date Object
// The Date object provides a system-independent abstraction of dates and times. Dates may be constructed from a year, month, day of the month, hour, minute, and second, and those six components, as well as the day of the week, may be extracted from a date. Dates may also be compared and converted to a readable string form. A Date is represented to a precision of one millisecond.

// The way JavaScript handles dates is very similar to the way Java handles dates: both languages have many of the same date methods, and both store dates internally as the number of milliseconds since January 1, 1970 00:00:00. Dates prior to 1970 are not allowed.


// 7.4.1 Constructors
// There are five forms of a Date constructor:


// DateConstructor:
//           new Date()
//           new Date(StringDate)
//           new Date(year, month, day)
//           new Date(year, month, day, hours, minutes, seconds)
//           new Date(year, month, day, hours, minutes)
//           new Date(year, month, day, hours)
//           new Date(IntegerLiteral)
// year, month, day, hours, minutes, and seconds are integers of the format described below.

// StringDate is a string representing a date in one of the following forms:


// month day, year
// month day, year, hours:minutes:seconds
// month day, year, hours:minutes
// month day, year, hours
// day month, year
// day month, year hours:minutes:seconds
// day month, year hours:minutes
// day month, year hours
// month/day/year
// year is the year, A.D., or the last two digits of the year; month is the full name of the month or a three-letter abbreviation, day is an integer value for the day of the month; hours is an integer between zero and 23; minutes and seconds are integers between zero and 59. If hours, minutes, or seconds are not specified, then the corresponding value is set to zero.

// msSinceEpoch is an integer representing the number of milliseconds since the epoch (00:00:00 GMT on January 1, 1970).

// The constructor with no parameters initializes a newly created Date object representing the instant of time that it was created, measured to the nearest millisecond.


// Examples
// The following examples show several ways to assign dates:


// today = new Date()
// birthday = new Date("December 17, 1995 03:24:00")
// birthday = new Date(95,12,17)
// birthday = new Date(95,12,17,3,24,0)

// 7.4.2 Properties
// The Date object has no pre-defined properties.


// 7.4.3 Methods
// The Date object has two kinds of methods: static methods used as member functions of the Date constructor itself, and dynamic methods used as member functions of instances of the Date object.

// The static methods are parse and UTC, with syntax:


// Date.UTC(parameters)
// Date.parse(parameters)
// The syntax for dynamic Date methods is:


// dateObjectName.methodName(parameters)
// where dateObjectName is a Date object created with one of the constructors from 1.2.1.


// 7.4.3.1 parse
// Returns the number of milliseconds in a date string since January 1, 1970, 00:00:00, local time. The syntax is:


// Date.parse(dateString)
// dateString is a string value representing a date.

// Given a string representing a time, parse returns the time value. It accepts the IETF standard date syntax: "Mon, 25 Dec 1995 13:30:00 GMT." It understands the continental US time-zone abbreviations, but for general use, use a time-zone offset, for example, "Mon, 25 Dec 1995 13:30:00 GMT+0430" (4 hours, 30 minutes west of the Greenwich meridian). If you do not specify a time zone, the local time zone is assumed. GMT and UTC are considered equivalent.

// Because the parse function is a static method of Date, you always use it as Date.parse(), rather than as a method of a Date object you created.

// For example, If IPOdate is an existing Date object, then


// IPOdate.setTime(Date.parse("Aug 9, 1995"))

// 7.4.3.2 setDate
// Sets the day of the month for a specified date.


// dateObjectName.setDate(dayValue)
// dateObjectName is the name of a Date object.
// dayValue is an integer from one to thirty-one, representing the day of the month.

// For example, the second statement below changes the day for theBigDay to the 24th of July from its original value.


// theBigDay = new Date("July 27, 1962 23:30:00")
// theBigDay.setDate(24)

// 7.4.3.3 setHours
// Sets the hours for a specified date.


// dateObjectName.setHours(hoursValue)
// dateObjectName is the name of a Date object.
// hoursValue is an integer between zero and twenty-three, representing the hour.

// For example, the following sets the hour of the Date object theBigDay to 7:


// theBigDay.setHours(7)

// 7.4.3.4 setMinutes
// Sets the minutes for a specified date.


// dateObjectName.setMinutes(minutesValue)
// dateObjectName is the name of a Date object.
// minutesValue is an integer between zero and fifty-nine, representing the minutes.


// theBigDay.setMinutes(45)

// 7.4.3.5 setMonth
// Sets the month for a specified date.


// dateObjectName.setMonth(monthValue)
// dateObjectName is the name of a Date object.
// monthValue is an integer between zero and eleven (representing the months January through December).

// For example, the following sets the month of the Date object theBigDay to 6:


// theBigDay.setMonth(6)

// 7.4.3.6 setSeconds
// Sets the seconds for a specified date.


// dateObjectName.setSeconds(secondsValue)
// dateObjectName is the name of a Date object.
// secondsValue is an integer between zero and fifty-nine.

// For example, the following sets the seconds of the Date object theBigDay to 30:


// theBigDay.setSeconds(30)

// 7.4.3.7 setTime
// Sets the value of a Date object.


// dateObjectName.setTime(timevalue) 
// dateObjectName is the name of a Date object.
// timevalue is an integer representing the number of milliseconds since the epoch (1 January 1970 00:00:00).

// Use the setTime method to help assign a date and time to another Date object.

// For example, the following statements set the value of the Date object sameAsBigDay to have the value of the Date object theBigDay:


// theBigDay = new Date("July 1, 1999")
// sameAsBigDay = new Date()
// sameAsBigDay.setTime(theBigDay.getTime())

// 7.4.3.8 setYear
// Sets the year for a specified date.


// dateObjectName.setYear(yearValue)
// dateObjectName is the name of a Date object.
// yearValue is an integer greater than 1900.

// For example, the following sets the year of the Date object theBigDay to 1996:


// theBigDay.setYear(96)

// 7.4.3.9 toGMTString
// Converts a date to a string, using the Internet GMT conventions.


// dateObjectName.toGMTString()
// dateObjectName is the name of a Date object .

// The exact format of the value returned by toGMTString varies according to the platform.

// Need xp definition.

// In the following example, today is a Date object:


// today.toGMTString()
// In this example, the toGMTString method converts the date to GMT (UTC) using the operating system's time-zone offset and returns a string value that is similar to the following form. The exact format depends on the platform.


// Mon, 18 Dec 1995 17:28:35 GMT

// 7.4.3.10 toLocaleString
// Converts a date to a string, using the current locale's conventions.


// dateObjectName.toLocaleString()
// dateObjectName is either the name of a Date object.

// In the following example, today is a Date object:


// today.toLocaleString()
// In this example, toLocaleString returns a string value that is similar to the following form. The exact format depends on the platform.


// 12/18/95 17:28:35

// 7.4.3.11 UTC
// Returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, Universal Coordinated Time (GMT).


// Date.UTC(year, month, day [, hrs] [, min] [, sec])
// year is a year after 1900.
// month is a month between zero and eleven.
// date is a day of the month between one and thirty-one.
// hrs is hours between zero and twenty-three.
// min is minutes between zero and fifty-nine.
// sec is seconds between zero and fifty-nine.

// UTC takes comma-delimited date parameters and returns the number of milliseconds since January 1, 1970, 00:00:00, Universal Coordinated Time (GMT).

// Because UTC is a static method of Date, you always use it as Date.UTC(), rather than as a method of a Date object you created.

// For example, the following statement creates a Date object using GMT instead of local time:


// gmtDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0))

// 7.5 Math Object
// The built-in Math object has properties and methods for mathematical constants and functions, respectively.


// 7.5.1 Constructors
// The Math object does not have any constructors. All of its methods and properties are static; that is, they are member functions of the Math object itself. There is no way to create an instance of the Math object.


// 7.5.2 Properties
// The Math object's properties represent mathematical constants. For example, the Math object's PI property has the value of pi (3.141...), expressed as


// Math.PI
// All properties of Math are read-only values; they cannot be set.


// 7.5.2.1 E
// Euler's constant and the base of natural logarithms, 2.718281828459045. Syntax:


// Math.E

// 7.5.2.2 LN2
// The natural logarithm of two, 0.6931471805599453. Syntax:


// Math.LN2

// 7.5.2.3 LN10
// The natural logarithm of ten, 2.302585092994046. Syntax:


// Math.LN10

// 7.5.2.4 LOG2E
// The base 2 logarithm of e, 1.4426950408889634. Syntax:


// Math.LOG2E

// 7.5.2.5 LOG10E
// The base 10 logarithm of e, 0.4342944819032518. Syntax:


// Math.LOG10E

// 7.5.2.6 PI
// The ratio of the circumference of a circle to its diameter, 3.141592653589793. Syntax:


// Math.PI

// 7.5.2.7 SQRT1_2
// The square root of one-half; equivalently, one over the square root of two, 0.7071067811865476. Syntax:


// Math.SQRT1_2

// 7.5.2.8 SQRT2
// The square root of two, 1.4142135623730951. Syntax:


// Math.SQRT2

// 7.5.3 Methods
// Standard mathematical functions are methods of Math. These include trigonometric, logarithmic, exponential, and other functions. For example, if you want to use the trigonometric function sine, you would write


// Math.sin(1.56)

// 7.5.3.1 abs
// Returns the absolute value of a number. Syntax:


// Math.abs(number)

// number is any numeric expression.



// 7.5.3.2 acos
// Returns the arc cosine (in radians) of a number. Syntax:


// Math.acos(number)

// number is a numeric expression between -1 and 1, inclusive.


// The acos method returns a numeric value between zero and pi radians. If the value of number is outside this range, it returns zero.



// 7.5.3.3 asin
// Returns the arc sine (in radians) of a number. Syntax:



// Math.asin(number)

// number is a numeric expression with a value between -1 and 1, inclusive

// The asin method returns a numeric value between -pi/2 and pi/2 radians. If the value of number is outside this range, it returns zero.



// 7.5.3.4 atan
// Returns the arc tangent (in radians) of a number.



// Math.atan(number)

// number is a numeric expression representing the tangent of an angle.


// The atan method returns a numeric value between -pi/2 and pi/2 radians.



// 7.5.3.5 atan2
// Returns the angle (theta component) of the polar coordinate (r,theta) that corresponds to the cartesian coordinate specified by the arguments. Syntax:


// Math.atan2(xCoord,yCoord)
// xCoord is a numeric expression representing a cartesian x-coordinate.
// yCoord is a numeric expression representing a cartesian y-coordinate.


// 7.5.3.6 ceil
// Returns the least integer greater than or equal to its argument.



// Math.ceil(number)

// number is any numeric expression.



// 7.5.3.7 cos
// Returns the cosine of a number.



// Math.cos(number)

// number is a numeric expression representing the size of an angle in radians.


// The cos method returns a numeric value between -1 and one, which represents the cosine of the argument.



// 7.5.3.8 exp
// Returns enumber, where number is the argument, and e is Euler's constant, the base of the natural logarithms.



// Math.exp(number)

// number is any numeric expression.



// 7.5.3.9 log
// Returns the natural logarithm (base e) of a number.



// Math.log(number)

// number is any positive numeric expression.


// If the value of number is outside the suggested range, log returns
// -1.797693134862316e+308.



// 7.5.3.10 max
// Returns the greater of two numbers. Syntax:



// Math.max(number1, number2)

// number1 and number2 are any numeric arguments or the properties of existing objects.



// 7.5.3.11 min
// Returns the lesser of two numbers. Syntax:



// Math.min(number1, number2)

// number1 and number2 are any numeric arguments or the properties of existing objects.



// 7.5.3.12 pow
// Returns base to the exponent power, that is, baseexponent. Syntax:



// Math.pow(base, exponent)

// base is any numeric expression.
// exponent is any numeric expression.



// 7.5.3.13 random
// Returns a pseudo-random number between zero and one. This method does not have any parameters. Syntax:



// Math.random()


// 7.5.3.14 round
// Returns the value of a number rounded to the nearest integer. Syntax:



// Math.round(number)

// number is any numeric expression.


// If the fractional portion of number is .5 or greater, the argument is rounded to the next highest integer. If the fractional portion of number is less than .5, the argument is rounded to the next lowest integer.



// 7.5.3.15 sin
// Returns the sine of a number. Syntax:



// Math.sin(number)

// number is a numeric expression, representing the size of an angle in radians.


// The sin method returns a numeric value between -1 and one, which represents the sine of the argument.



// 7.5.3.16 sqrt
// Returns the square root of a number. Syntax:



// Math.sqrt(number)

// number is any non-negative numeric expression. If the value of number is outside the required range, sqrt returns zero.



// 7.5.3.17 tan
// Returns the tangent of a number. Syntax:



// Math.tan(number)

// number is a numeric expression representing an angle in radians.


// 7.6 Number Object
// The Boolean object corresponds to the number primitive type.


// 7.6.1 Constructors
// The Number constructor creates an object with a numeric value.


// NumberConstructor:
//           new Number(          IntegerLiteral
//           new Number(FloatingPointLiteral)
//           new Number()
// If no argument is provided, the constructor creates an object with numeric value 0.


// 7.6.2 Properties
// The properties of the Number object are constants.


// 7.6.2.1 MAX_VALUE
// The largest number representable in JavaScript, 1.7976931348623157e308.


// 7.6.2.2 MIN_VALUE
// The smallest number representable in JavaScript, 2.2250738585072014e-308.


// 7.6.2.3 NaN
// The literal NaN, representing a value that is "not a number."


// 7.6.3 Methods
// The Number object has toString and valueOf methods.


// 7.7 String Object
// A String is an object representing a series of characters.


// 7.7.1 Constructors
// A string object is created whenever a string literal is used or assigned to a variable or with the explicit constructor:


// identifierName = new String(stringValue)
// stringValue can be a string literal or string-valued variable.


// 7.7.2 Properties
// A String object has one property, length.


// 7.7.2.1 length
// The length property indicates the total number of characters in a String object. The syntax is:


// stringObject.length
// stringObject is a String object.

// For example, the expression


// mystring = "Hello, World!"
// x = mystring.length
// assigns a value of thirteen to x, because "Hello, World!" has thirteen characters.


// 7.7.3 Methods
// To use String methods:


// stringName.methodName(parameters)
// stringName is a String object..
// methodName is a method of String.
// parameters are the parameters required by the method, if any.


// 7.7.3.1 indexOf
// Returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex.


// stringName.indexOf(searchValue)
// stringName.indexOf(searchValue, fromIndex)
// stringName is any string.
// searchValue is a string, representing the value to search for.
// fromIndex is the location within the calling string to start the search from. It can be any integer from zero to stringName.length - 1.

// Characters in a string are indexed from left to right. The index of the first character is zero, and the index of the last character is stringName.length - 1.

// If you do not specify a value for fromIndex, JavaScript assumes zero by default. If searchValue is not found, JavaScript returns -1.


// 7.7.3.2 lastIndexOf
// Returns the index within the calling string object of the last occurrence of the specified value. The calling string is searched backward, starting at fromIndex.


// stringName.lastIndexOf(searchValue,)
// stringName.lastIndexOf(searchValue, fromIndex)
// stringName is any string.
// searchValue is a string, representing the value to search for.
// fromIndex is the location within the calling string to start the search from. It can be any integer from zero to stringName.length - 1.

// Characters in a string are indexed from left to right. The index of the first character is zero, and the index of the last character is stringName.length - 1.

// If you do not specify a value for fromIndex, lastIndexOf assumes stringName.length - 1 (the end of the string) by default. If searchValue is not found, lastIndexOf returns -1.


// Example
// The following example uses indexOf and lastIndexOf to locate values in the string "Brave new world."


// var anyString="Brave new world"

// //returns 8
// anyString.indexOf("w")
// //returns 10
// anyString.lastIndexOf("w")
// //returns 6
// anyString.indexOf("new")
// //returns 6
// anyString.lastIndexOf("new"))

// 7.7.3.3 substring
// Returns a subset of a string object.


// stringName.substring(indexA, indexB)
// stringName is any string.
// indexA is any integer from zero to stringName.length - 1,.
// indexB is any integer from zero to stringName.length - 1,.

// Characters in a string are indexed from left to right. The index of the first character is zero, and the index of the last character is stringName.length - 1.

// If indexA is less than indexB, the substring method returns the subset starting with the character at indexA and ending with the character before indexB. If indexA is greater than indexB, the substring method returns the subset starting with the character at indexB and ending with the character before indexA. If indexA is equal to indexB, the substring method returns the empty string.


// Example
// The following example uses substring to display characters from the string "Netscape":


// var anyString="Netscape"

// //returns "Net"
// anyString.substring(0,3)
// anyString.substring(3,0)
// //returns "cap"
// anyString.substring(4,7)
// anyString.substring(7,4)

// 7.7.3.4 charAt
// Returns the character at the specified index.


// stringName.charAt(index)
// stringName is any string.
// index is any integer from zero to stringName.length - 1,.

// Characters in a string are indexed from left to right. The index of the first character is zero, and the index of the last character is stringName.length - 1. If the index you supply is out of range, JavaScript returns an empty string.


// Example
// The following example displays characters at different locations in the string "Brave new world":


// var anyString="Brave new world"

// // The character at index 0 is B
// anyString.charAt(0))
// // The character at index 3 is v
// anyString.charAt(3)

// 7.7.3.5 toLowerCase
// Returns the calling string value converted to lowercase.


// stringName.toLowerCase()
// stringName is any string.

// The toLowerCase method returns the value of stringName converted to lowercase. toLowerCase does not affect the value of stringName itself.


// Example
// The following example returns the lowercase string "alphabet":


// var upperText="ALPHABET"
// upperText.toLowerCase()

// 7.7.3.6 toUpperCase
// Returns the calling string value converted to uppercase.


// stringName.toUpperCase()
// stringName is any string.

// The toUpperCase method returns the value of stringName converted to uppercase. toUpperCase does not affect the value of stringName itself.


// Example
// The following example returns the string "ALPHABET":


// var lowerText="alphabet"
// lowerText.toUpperCase()

// 7.7.3.7 split
// Splits a String object into an array of strings by separating the string into substrings. Returns an Array object. Syntax:


// stringName.split(separator)
// stringName is a String object.
// separator is string literal or expression that separates the string into substrings. If separator is the empty string, split separates each character into a substring element in the array.

// [Previous] [Next] [First] [Last]
