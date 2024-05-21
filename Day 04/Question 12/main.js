// Question #12; Greetings:
// Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be 
//personalized with the person’s name.
var names = ["Alice", "Bob", "Charlie"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, "!! How are You?"));
}
// let nam: string[] = ["Alice", "Bob", "Charlie"];
// for (let name of nam) {
//     console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
// }
