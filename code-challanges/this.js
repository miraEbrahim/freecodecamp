// To understand this keyword, only we need to know 
//how, when and from where the function is called, 
//does not matter how and where function is declared or defined.


// function bike() {
//   console.log(this.name);
// }

// var name = "Ninja"; //global variable
// var obj1 = { name: "Pulsar", bike: bike };
// var obj2 = { name: "Gixxer", bike: bike };

// bike();   //prints “Ninja” because the context of execution is not specified so by default its global context and there is a variable name is present at global context with a “Ninja”  value.
// If we are in strict mode then the default value of this keyword is undefined otherwise this keyword act as global object, it’s called default binding of this keyword. (default is window object in case of browser).

// obj1.bike(); // “Pulsar” gets printed because function bike() gets called with the execution context as obj1 so this.name became obj1.name
// obj2.bike();      // "Gixxer" Same as " obj1.bike()", with obj2.bike()call where the execution context of function bike() is obj2


// //Implicit binding
// // when there is an object property which we are calling as a method then that object becomes this object or execution context object for that method, it is implicit binding of this keyword.
// var obj1 = {
//   name: "Pulsar1",
//   bike: function() {
//     console.log(this.name);
//   }
// }
// var obj2 = { name: "Gixxer2", bike: obj1.bike }; //Here bike function is declared as part of obj1 but regardless of that when we executeobj2.bike(), the context of execution is obj2 so obj2.name gets printed
// var name = "NinjaA";
// var bike = obj1.bike;

// bike();           // "NinjaA"  function call bike() is an example of default binding.
// obj1.bike();      // "Pulsar1" are examples of implicit binding
// obj2.bike();      // "Gixxer2" are examples of implicit binding
// console.log('one',bike());



// Explicit and Fixed Binding of “this” keyword
// If we use call and apply method with calling function, both of those methods take as their first parameter as execution context. that is this binding.
// function bike() {
//   console.log(this.name);
// }

// var name = "Ninja";
// var obj = { name: "Pulsar" }

// bike();           // "Ninja"
// bike.call(obj);   // "Pulsar"
// In this above snippet, if we call the function bike with call() method passing execution context object obj as first argument, then obj gets assigned to this object and it prints “Pulsar” which is nothing but obj.name. It’s called explicit binding of this keyword.
// In Fixed binding or Hard binding, we can force the this object to be same always no matter from where and how it gets called.
// var bike = function() {
//   console.log('first',this.name);
// }
// var name = "Ninja";
// var obj1 = { name: "Pulsar" };
// var obj2 = { name: "Gixxer" };

// var originalBikeFun = bike;
// bike = function() {
//   originalBikeFun.call(obj1);
// };

// bike();           // "Pulsar"
// bike.call(obj2);  // "Pulsar"
// As per above code snippet, bike() and bike.call(obj2) both call prints "Pulsar" which is nothing butobj1.name means the execution context of the function bike is always obj1 and its because of originalBikeFun.call(obj1); These kind of this binding is just another flavor of explicit binding called fixed binding.



// The “new” keyword in JavaScript
// The new keyword in front of any function turns the function call into constructor call and below things occurred when new keyword put in front of function
// A brand new empty object gets created
// new empty object gets linked to prototype property of that function
// same new empty object gets bound as this keyword for execution context of that function call
// if that function does not return anything then it implicit returns this object.
function bike() {
  var name = "Ninja";
  this.maker = "Kawasaki";
  console.log(this.name + " " + maker);  // undefined Bajaj
}

var name = "Pulsar";
var maker = "Bajaj";

obj = new bike();
console.log(obj.maker);                  // "Kawasaki"
// // In the above code snippet, bike function is get called with new keyword in front of it. So, it creates a new object then that new object gets linked to prototype chain of function bike, after that the created new object bound to this object and function returns this object. That’s how the returned this object assigned to obj andconsole.log(obj.maker) prints “Kawasaki” .
// In the above code snippet, this.name inside function bike() does not print “Ninja” or “Pulsar” instead it prints undefined because the name variable declared inside the function bike() and this.name are totally 2 different things. Same way this.maker and maker are different inside function bike() .
// Precedence of “this” keyword bindings
// First it checks whether the function is called with new keyword.
// Second it checks whether the function is called with call or apply method means explicit binding.
// Third it checks if the function called via context object (implicit binding).
// Default global object (undefined in case of strict mode).