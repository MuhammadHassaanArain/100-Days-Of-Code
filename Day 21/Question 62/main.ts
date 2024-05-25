/*
 Question 62; making a student template:
 create  a blueprint for student information,including their name ,age and the classes they are taking, and then
  fill in this blueprint with an example student.
 */
// Creating a blueprint (interface) for student information
interface student {
  name: string;
  age: number;
  classes: string[];
}

// Filling in the blueprint with an example student
let student: student = {
  name: "Hassaan Arain",
  age: 17,
  classes: ["Math", "IT", "Physics"],
};
//  Showing the student's information
console.log(student);

// We're using the blueprint to make sure our student has a name, age, and list of courses.
