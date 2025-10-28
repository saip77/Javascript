# Intermediate Javascript

## Stack vs Heap

- The stack is used for static memory allocation — data whose size and lifetime are known at compile time.
- The heap is used for dynamic memory allocation — where the size or lifetime of data isn’t fixed. It stores objects, arrays, and functions, because their size can change at runtime.

## Execution Context

- It means when we run a function, it creates an imaginary container that contains:-
    1. The function’s local variables
    2. Function inside the parent function
    3. Lexical environment of the function

## Example
```js
function abcd() {
    var a = 10;
    function bcd() {
        var b = 20;
    }
}
```

Eexecution context of `abcd` function is as follows:-
1. a = 10
2. bcd function
3. lexical environment of abcd function (which contains a and bcd function but not b since it is declared inside bcd function and var is function scoped)

## Lexical Environment

- It is a structure that contains scope and the scope chain of a function.

## How to copy reference values?

- It can be done with the help of spread operator.

```js
const arr = [1, 2, 3];
const arr2 = [...arr];
```

## Understanding forEach

- It is used to iterate over an array, which takes a callback function as an argument.
- It doesn't changes the original array.

```js
const arr = [1, 2, 3];
arr.forEach((e) => {
    console.log(e);
});
```

## Objects in Javascript

- It is a collection of key-value pairs.
- It is mutable.
- It is a reference type.

```js
const obj = {
    name: "sai prasad",
    age: 24,
    city: "bangalore"
};
```

## Accessing properties

- Dot notation

```js
console.log(obj.name);
```

- Bracket notation

```js
console.log(obj["name"]);
```


