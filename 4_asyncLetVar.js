'use strict';

for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    // by the time this Runs var has been incremented to 5
    console.log(`var: ${i}`);
  }, 1000);
}

for(var i = 0; i < 5; i++) {

  ((i) => {
    // Now we have a function scoped i
    setTimeout(() => {
      console.log(`var: ${i}`);
    }, 1000);
  })(i); // i is passed to the function on execution
}

for(let i = 0; i < 5; i++) { // let gives us block scope!
  setTimeout(() => {
    console.log(`let: ${i}`);
  }, 1000);
}
