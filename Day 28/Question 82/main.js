/*
Question 82: Find the Length of a String:
Write a function that takes a string as an argument and returns the number of characters in the string.

Explain & TIP: The .length property of a string gives you the total number of characters it contains,
helping you understand more about the data you're working with.
 */
// This function counts how many characters are in a string
function stringLength(str) {
    return str.trim().length; // Returns the number of characters in the string
}
// Example: Measuring the length of a name
console.log(stringLength(" David ")); // Outputs: 5
// We're simply asking how long the string "Alice" is, and it tells us there are 5 characters.
