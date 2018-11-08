var Queue = function() {
  // Create queue object by setting properties
  this.storage = {};
  this.first = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function(value) {
  // Increment last and add value to queue
  this.storage[this.last++] = value;
};

Queue.prototype.dequeue = function() {
  // Create copy of removed data
  var tempData = this.storage[this.first];
  
  // Check if queue is not empty
  if (this.last - this.first > 0) {
    // Delete prop
    delete this.storage[this.first];
    // Increment first
    this.first++;
  }
    
  // Return removed data
  return tempData;  
};

Queue.prototype.size = function() {
  return this.last - this.first;
};

