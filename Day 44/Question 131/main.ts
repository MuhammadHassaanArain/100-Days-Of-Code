/*
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an 
instance.

Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability 
is a cornerstone of modern JavaScript application structure.
 */

// In another file:
import { Person } from "./class";

const Catherine = new Person("Catherine");
Catherine.greet(); // Outputs: Hello, my name is Catherine
// This snippet imports the Person class and uses it to create an instance.
