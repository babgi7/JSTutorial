'use strict';

// Spread Operator supported in Node v5.11.0^

let arr = ['w', 'o', 'r', 'l', 'd'];
let str = 'hello';

// var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
let newStr = str.concat(' ', ...arr);
console.log(newStr); // hello world

let [hello, world] = newStr.split(' '); // ['hello', 'world']

console.log(hello); // hello
console.log(world); // world

let [firstLetter, ...rest] = newStr;

console.log(firstLetter); // h
console.log(rest); // [ 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(...rest); // e l l o   w o r l d
