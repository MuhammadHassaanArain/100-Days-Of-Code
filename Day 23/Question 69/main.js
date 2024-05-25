/*
Question 69: Dividing and Finding the Remainder:
 Write a function that divides two numbers and returns both the quotient and the remainder. Use an object
 to return both values.

Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both
in an object is a neat way to keep them together.
 */
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    // Returns both in an object
    return {
        quotient: quotient,
        remainder: remainder,
    };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3));
// Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
