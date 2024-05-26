/*
Question 76: Function Parameters and Return Values:
 Create a function that takes two numbers as parameters, adds them together, and returns the result. Show
  how you can call this function and log the result.

Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like 
personal assistants that do a specific task for you and report back with the results.
*/
// This function adds two numbers and returns the result

function addNumbers(num1: number, num2: number): number {

  // Calculates the sum of num1 and num2
  return num1 + num2;
}
// Calling the function with two numbers and logging the result

console.log(addNumbers(7, 6)); // Outputs 12

// Here, we ask our function to add 7 and 6, and it tells us the answer is 13.
