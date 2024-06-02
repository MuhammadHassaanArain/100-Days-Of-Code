/*
Question 127: Convert a traditional function expression to an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have
their own bindings to this or super, and should not be used as methods.
 */
// Traditional function expression
var traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(2, 3)); // Outputs: 5
console.log(arrowFunction(2, 3)); // Outputs: 5
// Demonstrates the conversion of a traditional function expression to an arrow function.
