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
     
     
         //var arr1, arr2;
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
   var unique = diffArr.filter(function(elem, index, self) {
         console.log("index " + index + " elem " + elem + " self " + self);
         return index == diffArr.indexOf(elem);
   });
   return unique;
 }
 
 
 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);