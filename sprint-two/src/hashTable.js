

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(index)
  // Initialize the bucket

  // Check if the bucket exists
  if (!Array.isArray(this._storage.get(index))) { 
    this._storage.set(index, []);
  } 

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) { 
    if (bucket[i][0] === k) { 
      return bucket[i][1] = v; 
    } 
  }

  bucket.push([k, v]); 
    
};
// Method that retrieves the value of the key 
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  
 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


