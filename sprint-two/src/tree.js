var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed me

  // Extend the newTree object
  _.extend(newTree, treeMethods);

  return newTree;
};

// Creating tree methods outside of Tree maker function
var treeMethods = {};

treeMethods.addChild = function(value) {
  // Push new node to child array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // Set boolean tracker
  var result = false;
  // Check if parent node has target value
  if (this.value === target) {
    result = true;
  }
  // Use recursion to traverse tree
  var traverse = function(currentNode) {
    // Iterate over current children array
    for (var i = 0; i < currentNode.length; i++) {
      // Check if current node is target
      if (currentNode[i].value === target) {
        result = true;
      }
      // Else continue traversal
      traverse(currentNode[i].children);
    }
    // Return result
    return result;
  };
  // Begin traversal and return result
  return traverse(this.children);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1) (Constant because you are adding the child to the current node. Like addTail in linked list)
 * contains: O(n) (Linear because you have to access every node in the tree until target is found) 
 */
