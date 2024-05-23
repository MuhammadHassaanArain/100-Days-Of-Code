/**
 Question 47: Advanced Array Destructuring:
  Given an array of objects representing different laptops, each with properties make, model, and year, use 
  array destructuring to assign the first and second laptops to variables. Then, log these variables.

Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying
access to complex data structures.
 */
let laptops = [
  {
    make: "dell",
    model: "150 x",
    year: 2020,
  },
  {
    make: "dell",
    model: "170x",
    year: 2022,
  },
  {
    make: "dell",
    model: "190 x",
    year: 2024,
  },
];

let [laptop1, laptop2] = laptops;

console.log(laptop1);
console.log(laptop2);
