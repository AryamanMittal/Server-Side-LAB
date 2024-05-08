function mergeSubarrays(array, start, middle, end) {
  const leftArray = [];
  const rightArray = [];
  
  for (let i = start; i <= middle; i++) {
    leftArray.push(array[i]);
  }
  
  for (let j = middle + 1; j <= end; j++) {
    rightArray.push(array[j]);
  }
  
  let leftIndex = 0;
  let rightIndex = 0;
  
  let currentIndex = start;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      array[currentIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      array[currentIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    currentIndex++;
  }
  
  while (leftIndex < leftArray.length) {
    array[currentIndex] = leftArray[leftIndex];
    leftIndex++;
    currentIndex++;
  }
  
  while (rightIndex < rightArray.length) {
    array[currentIndex] = rightArray[rightIndex];
    rightIndex++;
    currentIndex++;
  }
}

function performMergeSort(array, start, end) {
  if (start >= end) {
    return;
  }
  
  const middle = Math.floor((start + end) / 2);
  
  performMergeSort(array, start, middle);
  performMergeSort(array, middle + 1, end);
  
  mergeSubarrays(array, start, middle, end);
}

const sampleArray = [10, 9, 6, 8, 1, 2];

performMergeSort(sampleArray, 0, sampleArray.length - 1);

console.log(sampleArray);
