/*
Question 80: Updating Object Properties:
 Add a property named color to the existing car object, and then update the year property to 2021.
  Show how to perform these operations.

Explain & TIP: You can add new properties to an object or change existing ones after the object is created.
 This flexibility allows objects to be dynamically updated as needed.
 */
// Starting with our car object
var car = {
    make: "Honda",
    model: "Civic RS",
    year: 2023
};
// Adding a new property 'color' and updating 'year'
car.color = "Black"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log(car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
