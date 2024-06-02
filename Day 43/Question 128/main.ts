/*
Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters,
 you enclose them in parentheses.
 */

// Arrow function that calculates the product of all its parameters
let multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 4, 6)); // Outputs: 48
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.
