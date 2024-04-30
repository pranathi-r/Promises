let myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  let success = false;
  setTimeout(()=>{
     if (success) {
       resolve("Operation completed successfully!");
       console.log(myPromise)
     } else {
       reject("Operation failed!");
       console.log(myPromise);
     }

  },2000)
 
});



// Using .then() to handle fulfillment
myPromise
  .then((result) => {
    console.log(result); // Output: Operation completed successfully!
  })
  .catch((error) => {
    console.log(error); // This will not execute in this case
  });


  
