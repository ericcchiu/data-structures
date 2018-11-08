var Queue = function() {
  // Delegate object methods 
  var someInstance = Object.create(queueMethods); 
  
  // Set properties 
  someInstance.storage = {}; 
  someInstance.first = 0; 
  someInstance.last = 0; 
  
  // Return obj
  return someInstance; 
};
var queueMethods = {}; 
// Add to the back of the queue
queueMethods.enqueue = function(value) { 
  this.storage[this.last++] = value; 
};

// Remove queue from front
queueMethods.dequeue = function() { 
  // Store removed property 
  var deletedProperty = this.storage[this.first]; 
  if (this.last - this.first > 0) { 
    // Remove property from queue
    delete this.storage[this.first]; 
    // Increment
    this.first++;  
  }
  // Return removed prop
  return deletedProperty; 
};

queueMethods.size = function() { 
  // return size
  return this.last - this.first; 
};

