

// Instantiate a new graph
var Graph = function() {

  this.storageStructure = {};  
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this.storageStructure[node] = {};

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storageStructure[node]) { 
    return true; 
  }
  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storageStructure[node];
  // this.removeEdge(node.fromNode, node.toNode)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    // console.log('Inside hasEdge', this.[fromNode] === [toNode])
    // console.table(this.storageStructure[fromNode].toNode);
  if (this.storageStructure[fromNode][toNode] === undefined || this.storageStructure[toNode] === undefined) { 
    return false; 
  }
  return (this.storageStructure[fromNode][toNode] && this.storageStructure[toNode][fromNode]) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// Trials: 
  // this.edge = [fromNode, toNode];
  // this.storagestructure[toNode].fromNode = [];
  this.storageStructure[fromNode][toNode] = true; 
  this.storageStructure[toNode][fromNode] = true;  

// console.log('This is the structure', this.storageStructure)

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // console.log('REMOVE EDGE WATCHING.', this.storageStructure);
  delete this.storageStructure[fromNode][toNode];
  delete this.storageStructure[toNode][fromNode];
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // console.log('This is the structure', this.storageStructure);
  for (var key in this.storageStructure) {
    console.log(key);
    console.log([key]);
    cb(key);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(1)
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(1)
 * forEachNode: O(n)
 */


