var name = "John";

(function () {
  // Outputs: "Original name was undefined"
  console.log("Original name was " + name);

  var name = "Steve"; // This variable is hoisted to the top of the function block

  // Outputs: "New name is Steve"
  console.log("New name is " + name);
})();
