// Function to fetch data from an API using Fetch API and async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// URL of the API endpoint (JSON placeholder API)
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Fetching data using the fetchData function with async/await
async function fetchAndProcessData() {
  try {
    const data = await fetchData(apiUrl);
    console.log("Data fetched successfully:", 
      data.map((item) => item.id)
      );
    // Perform further operations with the fetched data here
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Call the async function to fetch and process the data
fetchAndProcessData();
