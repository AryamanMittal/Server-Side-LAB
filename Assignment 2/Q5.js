function swapElements(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function maintainHeap(array, index, size) {
  const leftChild = 2 * index + 1;
  const rightChild = 2 * index + 2;
  
  let largest = index;
  
  if (leftChild < size && array[leftChild] > array[largest]) {
    largest = leftChild;
  }
  
  if (rightChild < size && array[rightChild] > array[largest]) {
    largest = rightChild;
  }
  
  if (largest !== index) {
    swapElements(array, index, largest);
    maintainHeap(array, largest, size);
  }
}

function buildMaxHeap(array, size) {
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    maintainHeap(array, i, size);
  }
}

function performHeapSort(array, size) {
  buildMaxHeap(array, size);
  
  for (let i = size - 1; i > 0; i++) {
    swapElements(array, 0, i);
    maintainHeap(array, 0, i);
  }
}

function main() {
  const numbers = [5, 4, 3, 2, 1, 8, 6, 2, 1, 5, 15];
  
  performHeapSort(numbers, numbers.length);
  
  console.log(numbers);
}

main();
