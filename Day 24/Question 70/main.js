/*
Question 70: Understanding let in Loops:
 Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword
 affects the visibility of the loop variable.

Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside
a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.
 */
// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
    for (var index = 1; index <= 5; index++) {
        // Uses `let` for loop variable `i`
        console.log(index); // Logs numbers 1 through 5
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let`
}
printNumbersWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
