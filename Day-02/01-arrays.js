// Understanding Array methods

let myArray = [ '🍎 ', '🍌' , '🍇' , '🍊' ];
console.log("Original Array: ", myArray);

// 1. push() - adds an element to the end of the array
myArray.push('🍉');
console.log("After push: ", myArray);

// 2. pop() - removes the last element from the array
myArray.pop();
console.log("After pop: ", myArray);

// 3. shift() - removes the first element from the array
myArray.shift();
console.log("After shift: ", myArray);

// 4. unshift() - adds an element to the beginning of the array
myArray.unshift('🍓');
console.log("After unshift: ", myArray);

// 5. splice() - adds/removes elements from the array
// Note:- syntax: array.splice(start, deleteCount, item1, item2, ...)
myArray.splice(2, 1, '🥝'); // removes 1 element at index 2 and adds '🥝'
console.log("After splice: ", myArray);

// 6. slice() - returns a new array containing a portion of the original array
newArr = myArray.slice(1, 4); // returns a new array containing elements from index 1 to index 4 excluding 4th index
console.log("After slice: ", newArr);

// 7. indexOf() - returns the first index at which a given element can be found 
console.log("indexOf: ", myArray.indexOf('🍊')); 

// 8. includes() - checks if an array contains a certain element   
console.log("includes: ", myArray.includes('🍇'));

//9. forEach() - executes a provided function once for each array element
myArray.forEach((e,i) => {
    console.log(`Element ${i+1}`, e);
})

//10. map() - creates a new array with the results of calling a provided function on every element in the calling array.
let differentArray = [1,2,3,4,5];

function convert(n){
    return n*2;
}
let mappedArray = differentArray.map(convert);
console.log("mappedArray: ", mappedArray);

//11. filter() - creates a new array with all elements that pass the test implemented by the provided function.
let filteredArray = differentArray.filter(n => n%2==0);
console.log("filteredArray: ", filteredArray);

//12. reduce() - executes a reducer function on each element of the array, resulting in a single output value.
let sum = differentArray.reduce((acc, curr) => acc + curr);
console.log("sum: ", sum);

//13. find() - returns the value of the first element in the provided array that satisfies the provided testing function.
let foundElement = differentArray.find(n => n%2!=0);
console.log("foundElement: ", foundElement);

//14. findIndex() - returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = differentArray.findIndex(n => n%2==0);
console.log("foundIndex: ", foundIndex);

//15. every() - returns true if every element in the array satisfies the provided testing function.
let everyElement = differentArray.every(n => n%2==0);
console.log("everyElement: ", everyElement);

//16. some() - returns true if at least one element in the array satisfies the provided testing function.
let someElement = differentArray.some(n => n%2!=0);
console.log("someElement: ", someElement);