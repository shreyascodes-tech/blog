---
title: JavaScript the practical Guide (WIP)
---

# JavaScript the practical Guide
In this article I will teach the basics of JavaScript, the practical way no boring theory
that no body cares, so let us get started

> **before you start**: This article assumes that you have a basic understanding of any other programming language. You don't have to be an expert but should know basics like what a variable is or what an operator is for example

## Running your code
This is a practical guide to JavaScript so you will need to write some code and this is how you do it

1.  if you are on a mobile device please switch to a pc

2.  open the browser dev tools, `Ctrl + Shift + j` or `Cmd + Option + j` is the shortcut to open it in most browsers

3.  go to the console tab in the dev tools pane and you can start writing JS there

## Hello World
The most basic program you can write in a programming language is printing "Hello World"

```js
console.log("Hello, World!");
```

copy the above code into the console and hit enter to run it

🎊 wohooo you've written your very first JavaScript program, If you run the above code int
the console it prints `Hello World` as you might have expected

## What is JavaScript
JavaScript is one of the most used programming language in the world, used by the biggest 
companies in the world liek Netflix, Google, Amazon, Facebook, Instagram, Twitter, PayPal and many more.
If you see any website that has a basic interactivity then it most likely is built with JavaScript.

## What can JavaScript be used for
JavaScript started as a programming language to be used to add interactivity to a website.
To run JavaScript code browsers use a JavaScript engine that parses and executes the code we write.
So a very talented developer named [Ryan Dahl](https://github.com/ry) took the JavaScript engine
from chrome (v8 engine) and wrapped it in a c++ program and called it [Node Js](https://nodejs.org),
now we can execute JavaScript outside of a browser too which led to a lot of innovation in the space.
To answer the question what can be built with JavaScript, well

    - Websites (obviously)
    - Mobile Apps
    - Desktop Apps
    - Server Side Apps
    - Realtime Apps ( like live chats and media streaming services ) 
    - Games
    - Command Line Apps
and so many more things can be built with JavaScript

## The JavaScript Engine
JavaScript is a scripting language and is interpreted, meaning it can't directly run on a cpu.
So to run JS code we need an `engine` that well converts the JS code we write into instructions
that a CPU can understand and execute. There are a lot of different JS runtimes such as 

    - Chrome's V8 engine
    - Safari's JavaScript Core engine
    - Firefox's SpiderMonkey engine
JavaScript itself doen't have anything to do many practical things except performing
some basic logical operations like Math. To combat this These engines are wrapped in higher level
programs like a Browser or Node JS to give it access to features like Networking, FileSystem access etc

## The ECMAScript standard
JavaScript is a very popular programming language but there are a lot of different browsers
and different engines so every browser implements JavaScript in its own way which is a massive problem
for developers because some features supported by some browsers are not supported by some other browser.
This is a problem that we are still suffering from but the good news is most big browsers are adopting
the ECMAScript standard which is a standard maintained by an organisation named **ECMA**.
ECMAScript is specification that the JavaScript programming language confirms to.

ES2015 or ES6 is an ECMAScript that brings so many modern features to JavaScript like import/export syntax
Promises, Generators etc. We will take a look at some of the features introduced in ES6 in this article

**Enough theory let's start learning some JavaScript**
