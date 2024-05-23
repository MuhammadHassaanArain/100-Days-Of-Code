/*
Question # 41; Magicians:
 Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name
  of each magician in the array.
*/
var magicianName = ['Harry Houdini', 'Criss Angel', 'David Blaine'];
function show_magicians(magicianName) {
    magicianName.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicianName);
