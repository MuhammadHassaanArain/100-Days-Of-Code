/**
 Question # 42; Great Magicians:
  Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the
   array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see
    that the list has actually been modified.
 */
var magicianName = ["Harry Houdini", "Criss Angel", "David Blaine"];
function show_magicians(magicianName) {
    magicianName.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicianName);
function make_great(magicianName) {
    for (var index = 0; index < magicianName.length; index++) {
        magicianName[index] = " the great" + " " + magicianName[index];
    }
}
make_great(magicianName); // Modifies the original array
show_magicians(magicianName); // Shows modified names
