// Question 22: Intentional Error:
// If you haven’t received an array index error in one of your programs yet, try
//to make one happen. Change an index in one of your programs to produce an index error. Make sure
// you correct the error before closing the program.
var friends = ["Ali", "Akbar", "Saeed", "Farhan"];
console.log(friends[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
friends[3] = "Farhan"; // Correcting the error by accessing a valid index.
