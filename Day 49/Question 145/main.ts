/*
Question 145: Create a function that accepts a callback and invokes it with some arguments.

Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is
 very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of 
 a function with custom actions.
 */

// This function accepts a callback function and invokes it with given arguments
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
  }

  // Example callback function that adds two numbers
let add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b
  };

  executeCallback(add, 5, 3); // Outputs: 8
  // Demonstrates invoking a callback function with arguments to perform an addition.
