var BinarySearchTree = function(value) {
  
  this.value = value;
  this.left = null;
  this.right = null;
};
// var newTreeMethods = {};
BinarySearchTree.prototype.insert = function(value) {
  // console.log(this.value)

  // Check if value is greater than parent node
  if (value > this.value) { 
    if (!this.right) {
      // Set parent.right = BinarySearchTree(value)
      this.right = new BinarySearchTree(value);
      // console.log(this.left); Always watching
      // console.log(this.right); Always watching
    } else { 
      // console.log(this.right.value);
      this.right.insert(value);    
    }
  // Check if value is less than parent node
  } else if (value < this.value) {
    if (!this.left) {
      // Set parent.left = BinarySearchTree(value) 
      this.left = new BinarySearchTree(value); 
    } else {
      this.left.insert(value);
    }
  }
  // console.log('The left node:', this.left);
  // console.log('The right node:', this.right);
};

BinarySearchTree.prototype.contains = function(value) {
  // Track position
  // Check if target value is current node
  if (this.value === value) {
    return true;
  }
  // Check if value is greater than current node
  // If current node has branches on right
  if (value > this.value && this.right) {
    
    // Traverse right side branch
    return this.right.contains(value);
  
  // Else check the left side for same logic
  } else if (value < this.value && this.left) {

    // JOURNEY TO THE CENTER OF THE PLANET
    return this.left.contains(value);
  }
  // If tests fail return value not found in tree
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // Apply callback on current value 
  callback(this.value); 
  // console.log('Current node', this.value); Always watching 
  // Check if this.right is not null
  if (this.left) { 
    // if true, then recursively call dFL and pass in cb 
    this.left.depthFirstLog(callback);
    
    // console.log('LEFT', this.value); Always watching
  }
  if (this.right) { 
    // if this.right exists recursively call dFL
    this.right.depthFirstLog(callback); 
    // console.log('RIGHT', this.value); Always watching
    // Check if this.left exist 
  } 
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
