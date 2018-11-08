// Functional inheritance pattern
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create new node with Node method 
    var node = Node(value);
    // Check if head is null
    if (list.head === null) {
      // Set the head to new node 
      list.head = node; 
      // Set the tail to new node 
      list.tail = node; 
    } else { // If head is not null and node already exists 
      // add node to tail 
      list.tail.next = node; 
      // Initialize tail to node 
      list.tail = node; 
    }
    
      
  };

  list.removeHead = function() {
    // Create a temporary placeholder to store data prior to removal
    var tempData = list.head.value;

    // Reassign the head to the next node in sequence 
    list.head = list.head.next;

    // Return the removed data 
    return tempData;
  };

  list.contains = function(target) {
    // Create a tracker variable (current node we are on starting from head) 
    var currentNode = list.head;
    
    // While current node is not null 
    while (currentNode !== null) {
      // Check if current node value is the target value
      if (currentNode.value === target) {
        // Set boolean to true 
        return true;
      }
        // Else move onto the next node of the current node
      currentNode = currentNode.next;
    }
    return false;
  };

  // Return the list 
  return list; 
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
