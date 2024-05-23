/*
Question 56: Keep Only Strings:
Given a mix of different types of items, make a new list that has only the words.

Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes
only those words.
*/
// A mixed bag of items
var items = [
    12, "Typescript", true, "Coding", 13, false, "Developer"
];
// Picks out only the words
var newList = items.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(newList);
