/*
Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns
 a new array with the transformed items.
 */

// Defines an array with some words

let  words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];

// Uses .map() to create a new array with the length of each word
let  lengths: number[] = words.map(word => word.length);

console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.