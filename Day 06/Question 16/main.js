// Question 16: More Guests:
// You've found a bigger dinner table, so there's room for more guests.
//you like to join me for dinner?`);
var Guests = ["Catherine John", "Rose Mary", "David", "Alexa"];
console.log("Great news! I found a bigger dinner table!");
Guests.unshift("Hassaan");
Guests.splice(3, 0, "Ibrahim");
Guests.push("Zainab");
for (var _i = 0, Guests_1 = Guests; _i < Guests_1.length; _i++) {
    var guest = Guests_1[_i];
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
}
