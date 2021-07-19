# V8: The Javascript Engine

## Conceptual Aside: Processors, Machine Language and C++

Node is written in C++ because the JavaScript engine that Node uses i.e. V8 is also written in C++

## JavaScript Aside: JavaScript Engine and ECMAScript Specification
ECMAScript is the standard JavaScript is based on. JavaScript needed a standard since there are many engines. V8 follows the standard ECMAScript specification.

A Javascript Engine: A Program that converts JavaScript code into something that computer processor can understand

And it should follow the ECMAScript standard on how the language should work and what features it should have.

## Adding Features in JavaScript
We can add our own features to JavaScript. We can create our own C++ file and embed V8 into it. Then when we run JavaScript through our C++ file, it will support the features natively which we developed in our C++ file.

Node.js is a C++ program with V8 embedded that has added a wealth of great features that make it suitable to be a server side technology