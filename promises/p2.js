// Define an asynchronous function fetchData1 with a callback
function fetchData1(callback) {
  setTimeout(() => {
    console.log("Data 1 fetched.");
    callback(); // Call the callback function
  }, 1000); // Simulating a 1-second delay
}

// Define a callback function for fetchData1
function processResponse1() {
  console.log("Processing response 1...");
  fetchData2(processResponse2); // Call fetchData2 with a callback
}

// Define another asynchronous function fetchData2 with a callback
function fetchData2(callback) {
  setTimeout(() => {
    console.log("Data 2 fetched.");
    callback(); // Call the callback function
  }, 1000); // Simulating a 1-second delay
}

// Define a callback function for fetchData2
function processResponse2() {
  console.log("Processing response 2...");
  console.log("All data fetched and processed.");
}


// Call fetchData1 and start the callback hell
fetchData1(processResponse1);