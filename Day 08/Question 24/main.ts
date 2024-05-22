/*Question #24; More Conditional Tests:
 You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or 
equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
console.log("Testing equality with number:");
let num=6;
console.log(num===6);// true.
console.log(num===7);// false.

console.log(' Tests using the lower case function with string.');
let fruit = "Apple";
console.log(fruit.toLowerCase()==="apple");// true

console.log('Numerical Test.');
let amount : number = 86;
console.log(amount===86);//true
console.log(amount===72);// false.

console.log(amount> 100);// false.
console.log(amount<100);// true.

console.log(amount>= 100);// false.
console.log(amount<=86);// true

console.log('Test using "and" and "or" operators');

console.log(true && false );// false 
console.log(true || false);// true

console.log('Test whether an item is in a array');
let arr: string[]=["table", 'chair',"desk","board"];
console.log('is "chair" in array?');
console.log(arr.includes("chair"));// true

console.log('is "laptop" in array?');
console.log(arr.includes("laptop"));//false. 