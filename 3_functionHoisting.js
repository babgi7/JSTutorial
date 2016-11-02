// This technically gets run after the other function declaration
var cat = function() {
  console.log('woof');
}

// This Function gets hoisted to the top of application
function cat() {
  console.log('meow');
};

cat();
