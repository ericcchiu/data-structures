var BinarySearchTree = function(value) {

  this.left = {}
  this.right = {}
  this.nodeValue = value
};
// var newTreeMethods = {};
BinarySearchTree.prototype.insert = function(value) {
  // console.log(this.nodeValue)

  // Check if value is greater than parent node
  if (value > this.nodeValue) { 
    if (Object.keys(this.right).length < 1) {
      // Set parent.right = BinarySearchTree(value)
      this.right = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  // Check if value is less than parent node
  } else if (value < this.nodeValue) { 
    // Set parent.right = newTreeMethods(value)
    this.left = new BinarySearchTree(value); 
  }
  console.log('The left node:', this.left);
  console.log('The right node:', this.right);
};

BinarySearchTree.prototype.contains = function(value) {
  // Return boolean
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
