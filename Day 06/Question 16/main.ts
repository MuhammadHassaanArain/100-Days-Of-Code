// Question 16: More Guests:
// You've found a bigger dinner table, so there's room for more guests.
//you like to join me for dinner?`);

let Guests: string[] = ["Catherine John", "Rose Mary", "David", "Alexa"];
console.log("Great news! I found a bigger dinner table!");
Guests.unshift("Hassaan");
Guests.splice(3, 0, "Ibrahim");
Guests.push("Zainab");

for (let guest of Guests) {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
}
