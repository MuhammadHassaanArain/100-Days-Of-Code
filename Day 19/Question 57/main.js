/*
Question 57: Find the Average Grade:
 Given a list of grades, calculate the average grade.

Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving
us an idea of how well someone did overall.
*/
// A list of grades
var grades = [88, 94, 72, 99, 53, 77];
// Calculates the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }) / grades.length;
// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
