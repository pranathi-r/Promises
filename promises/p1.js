
// Define a function that takes a callback as an argument
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Call the callback function
}

// Define a callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call the greet function and pass the callback function as an argument
greet("Alice", sayGoodbye);