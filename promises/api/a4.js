const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error 1"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error 2"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1500);
});

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
// Output: Success
