/*
Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

Explain & TIP: To find a specific character in a string, you can iterate through each character and use a
condition to check for vowels. The loop can stop once a vowel is found.
 */
// // This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var character = str_1[_i];
        if (vowels.includes(character)) {
            console.log("First vowel found: ".concat(character));
            break; // Stops the loop at the first vowel found
        }
        console.log(character); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzya"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: a'
// Demonstrates iterating through a string and stopping at the first vowel.
