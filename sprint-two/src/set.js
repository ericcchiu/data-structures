var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // Push item to storage array 
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  // Check if indexOf item is >= 0; return boolean 
  return (this._storage.indexOf(item) >= 0) ? true : false;
};

setPrototype.remove = function(item) {
  // Store index 
  var index = this._storage.indexOf(item);
  // Check if item is found 
  if ( index >= 0) {
    // Remove item at index
    this._storage.splice(index, 1);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n)
 * remove: O(n)
 */
