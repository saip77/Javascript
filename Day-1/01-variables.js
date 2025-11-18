//var
console.log(a); // Hoisted to the top of the scope and initialized to undefined
var a = 1;
console.log(a);
var a = 8;      // Redeclared
console.log(a); 

//let 
let b = 2;
console.log(b);
b = 9;      // Reassigned but can't redeclare
console.log(b); 

//const
const c = 3;
console.log(c); // Can't reassign and can't redeclare