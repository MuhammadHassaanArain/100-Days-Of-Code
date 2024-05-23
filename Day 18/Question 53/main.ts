/**
 Question 53: Pulling Apart a Nested Object: 
 Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages,
  tools, and software frameworks. Find a way to get three specific skills from this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand 
specific pieces of information.
 */

// A list showing a programmer's skills in detail

let developerSkills = {
  codingLanguages: ["typescript", "Python", "C++"],
  tools: ["Git", "Docker"],
  frameWorks: ["React", "vue", "Angular"],
};

// Getting specific skills from the list

let { codingLanguages, tools, frameWorks } = developerSkills;

// Showing a skill from each category

console.log(
  `language: ${codingLanguages[0]}, tools: ${tools[0]}, frameworks: ${frameWorks[0]}`
);
