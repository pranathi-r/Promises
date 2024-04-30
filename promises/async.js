// Simulating an asynchronous function that returns a Promise
function asyncTask(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2); // Resolving the Promise with the doubled value
    }, 1000); // Simulating a 1-second delay
  });
}

// Using async/await to simplify Promises chaining
async function runTasks() {
  try {
    const result1 = await asyncTask(10);
    console.log("First result:", result1); // Output: First result: 20

    const result2 = await asyncTask(result1 + 5);
    console.log("Second result:", result2); // Output: Second result: 50

    const result3 = await asyncTask(result2 * 3);
    console.log("Final result:", result3); // Output: Final result: 150
  } catch (error) {
    console.error("Error:", error); // This will not execute in this case
  }
}

runTasks(); // Call the async function to run the tasks sequentially
