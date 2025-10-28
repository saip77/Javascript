// Basic array operations
var arr = [1, 2, 3, 4, 5];

// Acessing elements by index
console.log(arr[0]);

// Adding elements
arr.push(6);
console.log(arr);

// Adding element to the beginning
arr.unshift(0);
console.log(arr);

// Removing element from the beginning
arr.shift();
console.log(arr);

// Deleting elements
arr.pop();
console.log(arr);

// Splicing
arr.splice(2, 1);
console.log(arr);  // Note :- this removes element from 2nd index and number of elements to be removed is 1

// Iterating over an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// forEach loop 
var a = [1, 2, 3];
a.forEach((e)=>{
console.log(e+2)});

// Note :- while using arrow function, if you use {} then must use return statement
var b = a.map((e)=> e+2);
console.log(b);

// for in loop

var c = {
    name: "sai prasad",
    age: 24,
    city: "bangalore"
};

for (let key in c) {
    console.log(key, c[key]);
}

// Deleting a property
delete c.name;
console.log(c);