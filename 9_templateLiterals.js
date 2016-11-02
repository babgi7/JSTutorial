'use strict';

var someVar = "Foo Bar";

var longStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non\n" +
                 "dui dictum, sagittis velit et, " + someVar + " suscipit quam. Etiam tellus enim, rhoncus\n" +
                 "vitae lacinia vitae, facilisis a justo. Cum sociis natoque penatibus et";

console.log(longStr);
console.log("\n");

longStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non
dui dictum, sagittis velit et, ${someVar} suscipit quam. Etiam tellus enim, rhoncus
vitae lacinia vitae, facilisis a justo. Cum sociis natoque penatibus et`; // Free flow text and it takes in all newlines

console.log(longStr);
