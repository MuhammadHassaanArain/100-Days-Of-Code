/*
Question 68: Multiplying Decimals:
 Create a function that accepts two decimal numbers and returns their product.
  Round the result to two decimal places.

Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long.
 Rounding can help keep numbers manageable.
//  */
// This function multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    var product = num1 * num2;
    return Math.round(product * 100) / 100;
}
// Trying it with 0.4 and 0.8
console.log(multiplyDecimals(0.4, 0.8)); // Shows 0.32
// After multiplying, we round to make the result easier to read.
