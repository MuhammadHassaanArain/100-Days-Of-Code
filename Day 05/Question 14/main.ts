// Question 14: Guest List:
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner. Then use your list to print a message
//to each person, inviting them to dinner.

let Guests: string[] = ["Catherine John", "Rose Mary", "David", "Chris"];

Guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
