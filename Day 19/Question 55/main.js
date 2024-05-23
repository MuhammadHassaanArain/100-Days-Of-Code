/*
 Question 55: Double Numbers in an Array:
 Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each
number doubled.
 */
// Starts with a list of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Doubles each number
var doubledNumbers = numbers.map(function (number) { return number * 2; });
// Shows the new list of doubled numbers
console.log(doubledNumbers);
// This line takes each number, doubles it, and puts it in a new list.
