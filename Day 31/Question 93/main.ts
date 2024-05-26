/*
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use 
that index to set a new value with array bracket notation.
 */

// This function finds "Banana" in the fruits array and replaces it with "Mango"

function replaceBananaWithMango(fruit: string[]){

    let index = fruit.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruit[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array

let fruits: string[] = ["Apple", "Banana", "Grapes"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Grapes']
// We're swapping "Banana" for "Mango" in our fruit list.
