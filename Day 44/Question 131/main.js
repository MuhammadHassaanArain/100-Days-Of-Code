"use strict";
/*
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an
instance.

Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability
is a cornerstone of modern JavaScript application structure.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// In another file:
var class_1 = require("./class");
var Catherine = new class_1.Person("Catherine");
Catherine.greet(); // Outputs: Hello, my name is Catherine
// This snippet imports the Person class and uses it to create an instance.
