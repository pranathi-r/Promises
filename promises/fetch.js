// Function to fetch data from an API using Fetch API and Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// URL of the API endpoint (JSON placeholder API)
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Fetching data using the fetchData function
fetchData(apiUrl)
  .then((data) => {
     
      const ids = data.map((item) => item.id);
      console.log("Data IDs:", ids);
    } 
  )
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
