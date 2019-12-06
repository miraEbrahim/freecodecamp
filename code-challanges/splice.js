var arr = ["orange", "mango", "banana", "sugar", "tea"];         console.log("before adding 1: " + arr );
console.log('\n');
         var removed = arr.splice(2, 0, "water");
        console.log("After adding 1: " + arr );
        console.log('\n');
        console.log("removed is: " + removed);
         
         removed = arr.splice(3, 1);
        console.log("After removing 1: " + arr );
        console.log('\n');
        console.log("removed is: " + removed);