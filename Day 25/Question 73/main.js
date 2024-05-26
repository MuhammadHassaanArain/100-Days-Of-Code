/*
Question 73: Assigning and Updating Variables:
Create a function where you declare a variable using let and assign an initial value. Then, update its value
 within the same function and log both the initial and updated values.

Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This
is fundamental for keeping track of changing data within your programs.
 */
// This function shows how to assign and update variable values
function updateVariable() {
    var number = 15; // Initially assigns the value 15
    console.log("Initial value:", number); // Logs the initial value
    number = 20; // Updates the value to 20
    console.log("Updated value:", number); // Logs the updated value
}
updateVariable();
// We assign a value to a variable and then update it, showing how values can change.
