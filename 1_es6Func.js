// Traditional Functions
var myFunction = function(a, b) {
  return a * b;
};

// ES6 Arrow Functions
var myOtherFunction = (a, b) => a * b;

console.log(myFunction(2,3));
console.log(myOtherFunction(2,3));

var yetMoreFunctions = callback => {
  callback(null, 'some value');
}

yetMoreFunctions((err, returnValue) => {
  if(err) {
    console.log(err);
  } else {
    console.log(returnValue);
  }
});

function Person(name) {
  this.name = name;
}

Person.prototype.doSomethingWeird = function() {
  (function(){
    console.log(this.name); // value of this isn't correct
  })()
}

new Person('Steve').doSomethingWeird(); // undefined

Person.prototype.doSomethingWeird = function() {
  var self = this; // now we can access the correct this
  (function(){
      console.log(self.name);
  })()
}

new Person('Steve').doSomethingWeird(); // Steve

Person.prototype.doSomethingWeird = function() {
  (() => {
      console.log(this.name);
  })()
}

new Person('Steve').doSomethingWeird(); // Steve
