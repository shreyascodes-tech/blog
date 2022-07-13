---
title: JavaScript the practical Guide (WIP)
---

# JavaScript the practical Guide

In this article I will teach the basics of JavaScript, the practical way no
boring theory that no body cares, so let us get started

> **before you start**: This article assumes that you have a basic understanding
> of any other programming language. You don't have to be an expert but should
> know basics like what a variable is or what an operator is for example

## Running your code

This is a practical guide to JavaScript so you will need to write some code and
this is how you do it

1. if you are on a mobile device please switch to a pc

2. open the browser dev tools, `Ctrl + Shift + j` or `Cmd + Option + j` is the
   shortcut to open it in most browsers

3. go to the console tab in the dev tools pane and you can start writing JS
   there

## Hello World

The most basic program you can write in a programming language is printing
"Hello World"

```js
console.log("Hello, World!");
```

copy the above code into the console and hit enter to run it

🎊 wohooo you've written your very first JavaScript program, If you run the above
code int the console it prints `Hello World` as you might have expected

## What is JavaScript

JavaScript is one of the most used programming language in the world, used by
the biggest companies in the world liek Netflix, Google, Amazon, Facebook,
Instagram, Twitter, PayPal and many more. If you see any website that has a
basic interactivity then it most likely is built with JavaScript.

## What can JavaScript be used for

JavaScript started as a programming language to be used to add interactivity to
a website. To run JavaScript code browsers use a JavaScript engine that parses
and executes the code we write. So a very talented developer named
[Ryan Dahl](https://github.com/ry) took the JavaScript engine from chrome (v8
engine) and wrapped it in a c++ program and called it
[Node Js](https://nodejs.org), now we can execute JavaScript outside of a
browser too which led to a lot of innovation in the space. To answer the
question what can be built with JavaScript, well

    - Websites (obviously)
    - Mobile Apps
    - Desktop Apps
    - Server Side Apps
    - Realtime Apps ( like live chats and media streaming services ) 
    - Games
    - Command Line Apps

and so many more things can be built with JavaScript

## The JavaScript Engine

JavaScript is a scripting language and is interpreted, meaning it can't directly
run on a cpu. So to run JS code we need an `engine` that well converts the JS
code we write into instructions that a CPU can understand and execute. There are
a lot of different JS runtimes such as

    - Chrome's V8 engine
    - Safari's JavaScript Core engine
    - Firefox's SpiderMonkey engine

JavaScript itself doen't have anything to do many practical things except
performing some basic logical operations like Math. To combat this These engines
are wrapped in higher level programs like a Browser or Node JS to give it access
to features like Networking, FileSystem access etc

## The ECMAScript standard

JavaScript is a very popular programming language but there are a lot of
different browsers and different engines so every browser implements JavaScript
in its own way which is a massive problem for developers because some features
supported by some browsers are not supported by some other browser. This is a
problem that we are still suffering from but the good news is most big browsers
are adopting the ECMAScript standard which is a standard maintained by an
organisation named **ECMA**. ECMAScript is specification that the JavaScript
programming language confirms to.

ES2015 or ES6 is an ECMAScript that brings so many modern features to JavaScript
like import/export syntax Promises, Generators etc. We will take a look at some
of the features introduced in ES6 in this article

**Enough theory let's start learning some JavaScript**

## Comments

There are two types of comments in JavaScript **Single Line Comments** these
start with `//`

example

```js
// This is a single line comment that will not be parsed or executed by JS engine
```

**Multi Line or Block Comments** anything between `/*  */` is a block comment

example

```js
/*
    This is a block comment that
    Spans multiple lines
*/
```

**Doc Comments** anything between `/**  */` is a doc comment, doc comments are
used to give additional information about a variable, function, class etc to the
developer using our code or help our future selves to undersstannd a complex
piece of code that may be hard to understand

example

```js
/**
    This is a function that calculates the factorial of a number
*/
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
```

> We will discuss more about functions in later sections

## Data Types

JavaScript has two categories of data types

1. Value Types
   - string
   - number
   - boolean
   - undefined
   - null
1. Reference Types
   - array
   - object

we will look at each of them in detail soon

## Variables

Variable is a container that can store some piece of data in the memory with a
name assignned to it

### Creating Variables

in JavaScript a variable declaration starts with the `let` keyword followed by
an identifier and optionally a value assigned to it

for example

```js
let variable1;
let num = 10;
```

If you log these in the console like so you should see `undefined 10` printed to
the console

```js
console.log(variable1, num);
```

_**Variables can be re assigned**_

example

```js
let myVar = 10;
console.log(myVar); // 10
myVar = 20;
console.log(myVar); // 20
```

> **Note**: you can also create variables using the `var` keyword but it is a
> leagcy JavaScript feature, please avoid using it as much as possible, and no I
> am not going to talk about it here

### Constants

A constant in JavaScript is just like a variable but it cannot be re assigned

### Creating Constants

Constants in JavaScript is created with the `const` keyword followed by an
identifier followed by a value assignment (which is not optional)

for example

```js
const PI = 3.141592653;

console.log(PI); // 3.141592653
```

> **Note**: It is common to name literal constants like PI in all uppercase

## The Number Type
In JavaScript there is only one number type that represents any kind of number like integer or a floating point number

### Some operations on numbers

Addition
```js
let add = 10 + 20 // add = 20
add += 10 // adds 10 to the current add value
console.log(add); // 30
```

Subtraction
```js
let diff = 10 - 20 // diff = -10
diff -= 10
console.log(diff); // diff = 0
```

Multiplication
```js
let prod = 1.5 * 20 // prod = 30
prod *= 2 // prod = 60
```

Division
```js
let div = 3 / 2 // div = 1.5
div /= 1.5 // div = 1
```

Power
```js
let cube = 3 ** 3 // cube = 27
```

Increment
```js
let i = 0;
i++;
console.log(i); // 1
```

Decrement
```js
let d = 1;
d--;
console.log(d); // 0
```


## The String Type
In JavaScript strings are a sequence of characters but unlike other languages we don't have special type that represents a single character

example
```js
let name = "Shreyas"
console.log(name); // Shreyas
```
Strings can be created with single quotes or double quotes
example
```js
let quote = 'Shreyas said, "JavaScript is a programming language"'
console.log(quote); // Shreyas said, "JavaScript is a programming language"
```
example
```js
let sentence = "It's a line with single quotes"
console.log(name); // It's a line with single quotes
```

## String operations
uppercase
example
```js
// To Upper Case
console.log("ThIS iS a StrINg".toUpperCase()); // THIS IS A STRING
// To Lower Case
console.log("ThIS iS a StrINg".toLowerCase()); // this is a string

// Number to a string
let n = 4;
console.log(n.toString()); // 4

// Strintg to a number
let str = "12345"
console.log(+str); // 12345 (in color :) )
```

## The Boolean type
Bolean is JavaScript represents a true or false condition.
There are two boolean literals `true` and `false`

for example
```js
let isGrater = 3 > 4; // false because 3 is less than 4
```

## Logical operators

### Negation
returns the opposite boolean value of the given value
example

```js
console.log(!true); // false
console.log(!false); // true
```
> Also works with value types too, in JavaScript every value can be coersed (implicitly converted) into a boolean value a few examples are given below
```js
console.log(!0); // true
console.log(!1, !2); // false
console.log(!""); // true
console.log(!"non empty"); // false

console.log(!null, !undefined); // true true
```
### Double Negation
can be used to find the truth value of a value or a variable
for example
```js
let x = 10;
let y; // undefined
let z = null;
let e = "";
let nonE = "non empty";

console.log(!!x); // true
console.log(!!y); // false
console.log(!!z); // false
console.log(!!e); // false
console.log(!!nonE); // true

```

### Equlity
Unlike other languages JavaScript has two equality operators
1. The `==` operator
1. The `===` operator

We will only use the second one because it's modern and actually logical

The equality operator returns true if both the values are equal

example
```js
let isEqual = 10 === (5 + 5) // true
isEqual = "10" === 10 // false
```
> ***note*** ```"10" == 10``` with `==` returns true because of something called type coersion which we aren't ging to go in depth into but remember to use `===` and not `==`

### other logical operators
- Grater than and Less than
```js
// Grater than
console.log(10 > 20); // false
// Lesser than
console.log(10 < 20); // true
// Grater than or equal
console.log(10 >= 20); // false
// Lesser than or equal
console.log(10 <= 10); // true
```


## The Ternary operator
Used to assign a value based on a condition

for example
```js
let condition = 6 <= 10; // condition = true
let value = condition ? 6 : 4 // value = 6 because 6 is less than or equal to 10
```

## Control flow

### if else

example
```js
if (3 > 4) {
    console.log("3 > 4 ?");
} else if (1 === 1) {
    console.log("It's true");
} else {
    console.log("Not Possible");
}
```

### while
loops until the condition provided returns true

example
```js
while (true) {
    // Runs forever
}

// This code logs 0 to 9 in the console
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
```

### For

example
```js
// This logs 0 to 9 to the console
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```