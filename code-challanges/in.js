String.prototype.reverse = function (){
 //if(!this) return this;
 return this.split('').reverse().join(''); 
} 
console.log('mira'.reverse());
 //'cba'
