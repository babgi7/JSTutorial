'use strict';

// Async is a very powerful library
var async = require('async');

let funcArr = [];

for (let i = 0; i < 10; i++) {
  funcArr.push(createFunction(i)); // create an array of functions
}

// This will execute each function one after the other
async.series(funcArr, (err, result) => {
  console.log(result);
});

// This function will take an index and return
// a function that will take a callback Run
// setTimeout and execute a log and the callback
function createFunction(index) {
  return function(callback) {
    setTimeout(() => {
      console.log(`log ${index}`); // This index will be
      callback(null, index);
    }, 500);
  }
}
