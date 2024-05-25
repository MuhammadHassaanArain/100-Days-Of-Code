/*
Question 67: Arithmetic with Mixed Types:
 Write a function that takes two parameters: a number and a string that represents a number (e.g., "5").
  Return their sum as a number. 

Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a 
string that looks like a number, JavaScript converts the string to a number for the operation.
 */


// This function adds a number and a string that represents a number

function addNumberAndString   (num: number, numberString: string) : number {

    // Converts the string to a number and adds it to the first number

    return num + Number(numberString);
}

// Trying it with 10 and "5"
console.log(addNumberAndString(7, "6")); // Shows 13
// The string "6" is turned into the number 6, and then added to 7.
