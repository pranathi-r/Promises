const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Second"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error occurred"), 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error("Error:", error));
// Output: Error: Error occurred
