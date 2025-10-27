# The Basics of Javascript

## Word vs Keyword

- Word :- anything which doesn't have any special meaning in the language
- Keyword :- they are reserved words in the language

## Variable

- Variable is a container for storing data

## Understanding the difference between var, let and const

1. var :- 
- It can be reassigned and redeclared
- It is function scoped
- It is hoisted i.e. it's declration is moved to the top of the scope.

2. let :-
- It can be reassigned but not redeclared
- It is block scoped
- It is hoisted but it falls into Temporal Dead Zone(TDZ) i.e. the declaration and the first assignment is the time when the variable is not accessible.

3. const :-
- It can't be reassigned
- It is block scoped
- It is hoisted and falls into TDZ

## Primitive vs Reference Data Types

1. Primitive Data Types :-
- They represent simple and single values.
- When it is decleared, the variable directly holds the value in stack.
- When you assign a primitive value to a new variable, a **copy of the actual value** is created and assigned. Changes to one variable do not affect the other.

2. Reference Data Types :-
- They represent complex and multiple values.
- When it is decleared, the variable directly doesn't hold the value (array, object) rather it stores the memory address of the value in heap.
- When you assign a reference value to a new variable, a **reference to the actual value** is created and assigned. Changes to one variable do affect the other.

## Conditional 

if(1>2){
    console.log("1 is greater than 2");
}
else(1>2){
    console.log("2 is greater than 1");
}

## Loops

for(let i=0;i<5;i++){
    console.log(i);
}

while(i<5){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<5);

## Functions
Funtions are mainly used for 3 main purposes :-
1. when you want to run your code in future.
2. when you want to reuse your code.
3. when you want to run your code with different parameters.

## Arguments vs Parameters

1. Arguments :-
- are the values passed to the function.

2. Parameters :-
- are the variables which are used to store the values passed to the function.