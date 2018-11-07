var Queue = function() {
  // Creating the base object to store the methods and properties 
  var someInstance = {}; 
  
  // Define properties 
  someInstance.storage = {}; 
  someInstance.first = 0; 
  someInstance.last = 0; 
  
  // Extending object to include methods (delegation);
  _.extend(someInstance, queueMethods);


  return someInstance; 
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // Add to back 
  this.storage[this.last++] = value; 
}; 

queueMethods.dequeue = function() {
  // store removed data 
  var tempData = this.storage[this.first];
  // Check if queue is empty 
  if (this.last - this.first > 0) { 
    // Remove property from storage 
    delete this.storage[this.first]; 
    // Increment 
    this.first++; 
  }
  // Return removed data 
  return tempData; 
}; 

queueMethods.size = function() {
  // Return queue length 
  return this.last - this.first; 
}; 



