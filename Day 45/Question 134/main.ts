/*
Question 134: Take a JSON string and parse it into a JavaScript object.

Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly
 useful when dealing with data received as JSON from a web server or API.
*/

// Defines a JSON string
let jsonString = '{"name":"Rose Mary","age":22,"city":"Los Angeles"}';

// Parses the JSON string back into a JavaScript object
let  person = JSON.parse(jsonString);

console.log(person); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.
