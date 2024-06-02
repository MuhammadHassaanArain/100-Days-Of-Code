var _this = this;
/*
Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

Explain & TIP: In traditional functions, this refers to the object that called the function, which can
vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the
code that contains the arrow function.
 */
// Demonstrating 'this' in traditional vs. arrow functions
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value); // 'this' is not bound to traditionalVsArrow object but
        //    to the scope in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions
//    versus arrow functions.
