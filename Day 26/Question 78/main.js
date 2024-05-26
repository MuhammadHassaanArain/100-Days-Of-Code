/*
Question 78: Function Expressions vs. Function Declarations:
Compare function expressions and declarations by creating one of each that performs the same task,
such as squaring a number.

Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the
function and can be called before they're defined, and expressions that are stored in variables and
 are called using the variable name.
 */
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 5
console.log(squareDeclaration(5)); // Outputs: 25
console.log(squareExpression(5)); // Outputs: 25
// Both methods give us the same result, showing two different ways to create functions that do the 
// same thing.
