// Question 15: Changing Guest List:
// One of your guests can't make it to the dinner, so you need to send out a new set of invitations with 
//a replacement guest.
// Q # 14;
var Guests = ["Catherine John", "Rose Mary", "David", "Chris"];
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q # 15;
var unableToAttend = 'Chris';
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replacing Guest.
var newGuest = 'Alexa';
Guests[Guests.indexOf(unableToAttend)] = newGuest;
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
