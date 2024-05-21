// Question 13: Your Own Array:
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
//stores several examples. Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.”
var transports = ["BMW motorcycle", "Tesla car", "Bianchi bicycle"];
for (var _i = 0, transports_1 = transports; _i < transports_1.length; _i++) {
    var list = transports_1[_i];
    console.log("I Would like to own a ".concat(list, "."));
}
;
