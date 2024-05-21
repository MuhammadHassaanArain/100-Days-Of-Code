// Question 15: Changing Guest List:
// One of your guests can't make it to the dinner, so you need to send out a new set of invitations with 
//a replacement guest.

// Q # 14;
let Guests: string[] = ["Catherine John", "Rose Mary", "David", "Chris"];

Guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Q # 15;
let unableToAttend : string = 'Chris';
console.log(`${unableToAttend} can't make it to dinner.`);

//Replacing Guest.
let newGuest : string = 'Alexa';
Guests[Guests.indexOf(unableToAttend)] = newGuest;

// new invitations.
Guests.forEach(guest=>{console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
