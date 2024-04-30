// Simulating an asynchronous function that returns a Promise
function asyncTask(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2); // Resolving the Promise with the doubled value
    }, 1000); // Simulating a 1-second delay
  });
}

// Chaining Promises
asyncTask(10) // Initial Promise
  .then((result) => {
    console.log("First result:", result); // Output: First result: 20
    return asyncTask(result + 5); // Chaining another Promise
  })
  .then((result) => {
    console.log("Second result:", result); // Output: Second result: 50
    return asyncTask(result * 3); // Chaining another Promise
  })
  .then((result) => {
    console.log("Final result:", result); // Output: Final result: 150
  })
  .catch((error) => {
    console.error("Error:", error); // This will not execute in this case
  });
