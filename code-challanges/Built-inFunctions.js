/**  
 "top-level" Built-in Functions 
**/

/**
  JavaScript has five functions built in to the language. 
    1. eval
    2. parseInt
    3. parseFloat
    4. escape
    5. unescape.
**/

/**
  1. eval
  Evaluates a string and returns a value.


  eval(Expression)
  Expression is evaluated, and if the result is not a string, the result is returned.

  If the result is a string, it is taken to be a JavaScript program, and it is evaluated. If the program completes normally, eval returns the value of the last expression in it.

  The scope of execution is determined as described in 5.2 This.


  Examples
  Both of the println statements below display 42. The first evaluates the string "x + y + 1," and the second evaluates the string "42."


  var x = 2
  var y = 39
  var z = "42"
  println(eval("x + y + 1")) 
  println(eval(z))
  In the following example, the getFieldName function returns a string value that may represent a number or string. The second statement below uses eval to display the value of the form element.


  var field = getFieldName(3) 
  println("Field named ", field, " has value of ", eval(field + ".value"))
  The following example uses eval to evaluate the string str. This string consists of JavaScript statements that do different things, depending on the value of x. When the second statement is executed, eval will cause these statements to be performed, and it will also evaluate the set of statements and return the value that is assigned to z.


  var str = "if (x == 5) {z = 42; println("z is" + z);} else z = 0; "
  println("z is " + eval(str))
 */