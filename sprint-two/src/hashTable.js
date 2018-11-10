

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Initialize the bucket to empty array (iterable)
  
  
  // Check if the bucket exists
  if (!Array.isArray(this._storage.get(index))) { 
    this._storage.set(index, []);
  } 
  var bucket = this._storage.get(index);

  // if (bucket[index][0]=== k)
  for (var i = 0; i < bucket.length; i++) { 
    if (bucket[i][0] === k) { 
      return bucket[i][1] = v; 
    } 
  }

  bucket.push([k, v]); 
    
};
// Method that retrieves the value of the key and returns the value of key 
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Initialize the bucket to an initial array 
  var bucket = this._storage.get(index); 


  // Iterate over bucket to check for target key (k)
  for (var i = 0; i < bucket.length; i++) {
    // Check if k is in bucket 
    if (bucket[i][0] === k) {
      // return value (v)
      return bucket[i][1];
    }
  }
    
  
  
 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Initialize the bucket to an initial array 
  var bucket = this._storage.get(index); 


  // Iterate over bucket to check for target key (k)
  for (var i = 0; i < bucket.length; i++) {
    // Check if k is in bucket 
    if (bucket[i][0] === k) {
      // Remove tuple
      bucket[i].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(n)
 */


