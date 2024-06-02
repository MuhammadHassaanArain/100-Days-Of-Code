"use strict";
/*
Question 130: Explain how to export a function from one JavaScript file and import it into another file.

Explain & TIP: In modern JavaScript development, modules allow you to divide your code into separate files.
This makes your code more organized and maintainable. You can export functions, objects, or primitives from
one file and import them into another.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
var function_1 = require("./function");
console.log((0, function_1.add)(2, 3)); // Outputs: 6
// Demonstrates importing the add function from functions.ts and using it.
