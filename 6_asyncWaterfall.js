'use strict';

var async = require('async');

// Calls an array of functions and passes the
// result of the previous function to the next
async.waterfall([
  (callback) => {
    // Do something asynchronous here
    callback(null, 'a'); // First param is for errors
  },
  (arg1, callback) => { // arg1 is a
    callback(null, arg1.concat('b'));
  },
  (arg1, callback) => { // arg2 is ab
    callback(null, arg1.concat('c'));
  }
], (err, results) => {
  console.log(results); // abc
});
