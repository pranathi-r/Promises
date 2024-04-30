// Simulating an asynchronous function with callbacks
function asyncTask(value, callback) {
  setTimeout(() => {
    callback(value * 2); // Callback with the doubled value
  }, 1000); // Simulating a 1-second delay
}

// Chaining callbacks (pyramid of doom)
asyncTask(10, (result1) => {
  console.log("First result:", result1); // Output: First result: 20

  asyncTask(result1 + 5, (result2) => {
    console.log("Second result:", result2); // Output: Second result: 50

    asyncTask(result2 * 3, (result3) => {
      console.log("Final result:", result3); // Output: Final result: 150
    });
  });
});
