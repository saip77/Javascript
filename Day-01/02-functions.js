// Functions
// Function with a return value
function add(a, b) {
    return a + b; // This function explicitly returns the sum of 'a' and 'b'.
}

// When 'add' is called, its return value (3) is stored in the variable 'a'.
// 'console.log(a)' then prints the value stored in 'a'.
a = add(1, 2);
console.log(a); // Output: 3


// Function without an explicit return value
function subtract(a, b) {
    console.log(a - b); // This function directly prints the difference.
    // It does NOT have a 'return' statement, so it implicitly returns 'undefined'.
}

// When 'subtract' is called, it directly prints its output (2) to the console.
// There is no value to store from this call, as it doesn't return anything meaningful.
subtract(5, 3); // Output: 2

// If you try to store the result of a function that doesn't explicitly return a value,
// the variable will hold 'undefined'.
let result = subtract(10, 5);  // Output: 5 (from the function's console.log)
console.log(result);          // Output: undefined (because subtract() didn't return a value)
