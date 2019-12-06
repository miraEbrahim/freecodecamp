/**  1. compare a 2d arrays againts a second 2d array
 *    2.update current exsiting inventory quantiets in arr1
 *    3. if item cant be found in arr1 added
 *    4. return an inventory array upodated and sorted in alph        order 
 * */

//we create an array sorting function - only sort the first array or one array

// Example inventory lists
let curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

let newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];


const sort2DArray = (arr) => {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++){
    tempArr[i] = [arr[i][1], arr[i]];
  }
  tempArr.sort();
  let sortedResult = [];
  for( let j = 0; j < tempArr.length; j++){
    sortedResult.push(tempArr[j][1]);
  }
  return sortedResult;
} 

const sort = (arr) => sorted = arr.sort();

function inventory(arr1, arr2) {
  //arr1: current arr2: new
  if (arr1.length === 0) return sort2DArray(arr2);
  if (arr2.length === 0) return sort2DArray(arr1);
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
  
  return sort2DArray(res);  
}

console.log(sort([2,2,4,3,5,6]))
//console.log(sortArray([1,2,3,4,0,1,2]))
console.log(inventory(curInv, newInv));

// [
//   [ 2, 'Dirty Sock' ],
//   [ 3, 'Hair Pin' ],
//   [ 3, 'Half-Eaten Apple' ],
//   [ 5, 'Microphone' ],
//   [ 7, 'Toothpaste' ],
//   [ 88, 'Bowling Ball' ]
// ]

[
  [ 88, 'Bowling Ball' ],
  [ 2, 'Dirty Sock' ],
  [ 3, 'Hair Pin' ],
  [ 3, 'Half-Eaten Apple' ],
  [ 5, 'Microphone' ],
  [ 7, 'Toothpaste' ]
]