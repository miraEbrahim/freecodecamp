function symDiff(...args) {
  let argumentsArrays = [];
  let originalArraysLength = argumentsArrays.length;
  
  const findDiff = (arr1, arr2) => {
    let diffArr = [];
    for (let i in arr1){
      if(arr2.indexof(arr1[i]) === -1){
        diffArr.push(arr1[i]);
      } else {
        console.log(arr1[i]);
      }
    }
  }

  let diffArr = findDiff(argumentsArrays[0],argumentsArrays[1]);
  if(originalArraysLength===argumentsArrays.length){ //uf it is the first iterration
    argumentsArrays.splice(0,2);
  }else{
    argumentsArrays.splice(0,1);
  }
  if(argumentsArrays.length>=1){
		
    return findDiff(diffArr, argumentsArrays[0]);
  
  }else{
    console.log("array length less than 1");
    
    return diffArr;
    
  }
}

symDiff([1,2,3],[4,5,6,7],[8,6,5,4]);