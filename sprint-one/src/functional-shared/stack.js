var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;
  
  // Extending someInstance object to include stackMethods
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  // Alternative 
  // _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  // Instantiate new property in stack
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  // Check if stack is empty return 0 if true
  if (this.count < 1) { 
    return 0; 
  } 
  // Store property prior to removal from stack
  var deletedData = this.storage[this.count]; 
  // Remove property from stack
  delete this.storage[this.count];
  // Decrement count
  this.count--; 
  
  // Return removed property
  return deletedData;

};

stackMethods.size = function() {
  // Return the size of stack
  return this.count;
};



