var Stack = function() {
  // Declare the object to be created
  var someInstance = Object.create(stackMethods);
  
  // Create properties to store values needed for methods
  someInstance.storage = {};
  someInstance.count = 0;

  // Return created object
  return someInstance;
};
//Create the methods object
var stackMethods = {};

stackMethods.push = function(value) {
  // Increment size of stack with count
  this.count++;
  // Set value on stack object
  this.storage[this.count] = value;
};
stackMethods.pop = function() {
  // Check if stack is empty, if so return 0
  if (this.count < 1) {
    return 0;
  }

  // Create a copy of the removed prop
  var tempData = this.storage[this.count];
  // Delete entire prop from stack
  delete this.storage[this.count];
  // Decrement stack size with count variable
  this.count--;

  // Return the deleted prop
  return tempData;

};
stackMethods.size = function() {
  // Return count to quate to stack size
  return this.count;
};


