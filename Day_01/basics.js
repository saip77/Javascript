// Hoisting
console.log(a);
var a = 10;

// Primitive Data Types
var a = 10;
var b = a;
a = 20;
console.log(b);
console.log(a);

// Conditional

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}

// Loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i =0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// Functions
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

