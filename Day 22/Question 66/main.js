/*
Question 66; Logical AND verification:
create a function that checks two boolean(true and false) values.it should only say true if both are true,
 using the && operator.For instance,checkbothtrue(true,false) should be false.
 */
// This function sees if both inputs are true
function checkBothTrue(value1, value2) {
    // Only says true if both val1 and val2 are true
    return value1 && value2;
}
// Trying it with true and false
console.log(checkBothTrue(true, true)); // Shows false
// It checks two things, but since one is false, the answer is false.
