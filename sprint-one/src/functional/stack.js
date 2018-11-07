var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //create position tracker for stack
  var count = 0; 

  // console.log(count); always watching

  // Implement the methods below
  someInstance.push = function(value) {
    // Update position on stack 
    count++;
    // Using count to set numeric key to store value.
    storage[count] = value; 
    // someInstance.count = storage; 
  };

  someInstance.pop = function() {
    // Check if stack is empty 
    if (count < 1) { 
      // Return empty size of zero
      return 0; 
    }
    // Store data about to be deleted by pop method
    var deletedData = storage[count];
    // Remove property from stack with delete operator
    delete storage[count];
    // Decriment count
    count--; 
    // Return the deleted property
    return deletedData;
  };

  someInstance.size = function() {
    // Return size of stack
    return count;
  };
  
  return someInstance;
};
