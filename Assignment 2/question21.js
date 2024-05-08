class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  isListEmpty() {
    return this.head === null;
  }

  displayList() {
    let currentNode = this.head;
    if (this.isListEmpty()) {
      console.log('Empty linked list');
    } else {
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
}

function main() {
  const list = new LinkedList();
  
  console.log('Is the list empty?', list.isListEmpty());
  list.displayList();
  
  list.append(5);
  list.append(6);
  list.append(2);
  
  console.log('Is the list empty?', list.isListEmpty());
  list.displayList();
}

main();
