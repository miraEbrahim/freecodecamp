// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// // function updateInventory(arr1, arr2) {
// //   // All inventory must be accounted for or you're fired!
// //   return arr1;
// // }

// // // Example inventory lists
// // var curInv = [
// //   [21, "Bowling Ball"],
// //   [2, "Dirty Sock"],
// //   [1, "Hair Pin"],
// //   [5, "Microphone"]
// // ];

// // var newInv = [
// //   [2, "Hair Pin"],
// //   [3, "Half-Eaten Apple"],
// //   [67, "Bowling Ball"],
// //   [7, "Toothpaste"]
// // ];

// updateInventory(curInv, newInv);


function sort2darray(arr) {
  var temp = [];
  for (var l = 0; l < arr.length; l++) {
    temp[l] = [arr[l][1], arr[l]];
  }
  temp.sort();
  var result = [];
  for (var m = 0; m < temp.length; m++) {
    result.push(temp[m][1]);
  }
  return result;
}

function inventory(arr1, arr2) {
  //arr1: current arr2: new
  if (arr1.length === 0) return sort2darray(arr2);
  if (arr2.length === 0) return sort2darray(arr1);
  var res = [];
  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  var res_init_length = res.length;
  for (var j = 0; j < arr2.length; j++) {
    var count = 0;
    for (var k = 0; k < res_init_length; k++) {
      if (arr2[j][1] === res[k][1]) res[k][0] += arr2[j][0];
      else count++;
      if (count === res_init_length) res.push(arr2[j]);
    }
  }
  
  return sort2darray(res);  
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(inventory(curInv, newInv));
//inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);