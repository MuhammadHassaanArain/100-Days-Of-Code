/*
 Question 64; combine strings and numbers:
 write a function that mergesa piece of text with number For example,if provided with "ahe: " and 30, it should
  give back "age : 30".
 */
// This function mixes a text and a number into one text
function combineStringAndNumber(text, number) {
    // Joins the text and number into a single text
    return text + number;
}
// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age: ", 17)); // Shows "Age: 30"
// Here, we put together the text and number.
