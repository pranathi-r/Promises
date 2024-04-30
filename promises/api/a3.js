const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Second"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third"), 1500);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
