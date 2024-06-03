/*
Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used
 inside an async function. Using await makes asynchronous code look and behave a little more like 
 synchronous code, which can make it easier to understand and debug.
 */
// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
  // Assuming fetchSomething returns a Promise
  const data = await fetchSomething();
  console.log(data);
  // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
// This demonstrates how 'await' improves readability and flow in asynchronous code.
