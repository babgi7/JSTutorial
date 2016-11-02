function Person(name) {
  this.name = name;
}

// Add printName function to Person
// using prototype ensure's only one function
// is created and used
Person.prototype.printName = function () {
  console.log(this.name);
};

// Create a person and print his name
var john = new Person('John Smith');
john.printName(); // John Smith

// Assign john's print name function to
// a global variable
var printNameFunc = john.printName;
printNameFunc(); // undefined

// bind will assign john's 'this'
// to the function
var johnsPrintNameFunc = printNameFunc.bind(john);
johnsPrintNameFunc(); // John Smith

console.log(this);
