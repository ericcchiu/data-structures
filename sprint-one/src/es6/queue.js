class Queue {
  
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue (value) {
    this.storage[this.last++] = value
  }

  dequeue () {
    var tempData = this.storage[this.first];
    if (this.last - this.first > 0) {
      delete this.storage[this.first];
      this.first++;
    }
    return tempData;
  }

  size () {
    return this.last - this.first;
  }
}
