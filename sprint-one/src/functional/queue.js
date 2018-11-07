var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Create variable to track the data changes 
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Create a new value with a numeric key 
    storage[last++] = value;
    // console.log(last); // Always watching 
  };

  someInstance.dequeue = function() {
    // Create a copy of deleted data
    var tempData = storage[first];
    // Check if dequeue tries to remove empty queue
    if (last - first > 0) {
      // Remove property with delete
      delete storage[first];
      // Incremenent first to update size properly
      first++;
    }
    // return removed data
    return tempData;
  };

  someInstance.size = function() {
    // Return the size of the queue by taking the difference
    return last - first;
  };

  return someInstance;
};
