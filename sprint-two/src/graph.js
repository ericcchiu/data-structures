

// Instantiate a new graph
var Graph = function() {

  this.graphStructure = {};  
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this.graphStructure[node] = {};

  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graphStructure[node]) { 
    return true; 
  }
  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.graphStructure[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    // console.log('Inside hasEdge', this.[fromNode] === [toNode])
  return (this.graphStructure[fromNode][toNode] && this.graphStructure[toNode][fromNode]) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// Trials: 
//   this.edge = [fromNode, toNode];
  this.graphStructure[fromNode][toNode] = true; 
  this.graphStructure[toNode][fromNode] = true; 

// console.log('This is the structure', this.graphStructure)

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


