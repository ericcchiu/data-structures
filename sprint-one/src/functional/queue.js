var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last++] = value;
    console.log(last);
  };

  someInstance.dequeue = function() {
    var tempData = storage[first];
    if (last - first > 0) {
      delete storage[first];
      first++;
    }
    return tempData;
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
