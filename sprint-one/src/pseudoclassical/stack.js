var Stack = function() {
  // Create stack storage structure
  this.storage = {}; 
  this.count = 0; 
};

Stack.prototype.push = function(value) { 
  // Increment count
  this.count++; 
  // Add property to top of stack
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() { 
  // Store soon deleted property 
  var tempData = this.storage[this.count]; 

  // Check if stack is empty 
  if (this.count < 1) { 
    return 0; 
  } 
  
  // Remove property from top of stack
  delete this.storage[this.count];
  
  // Decrement by 1
  this.count--; 

  // Return removed value
  return tempData;
};

Stack.prototype.size = function() { 
  return this.count;
};

