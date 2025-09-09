const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = selectionSort(arr);
console.log("Sorted array:", arr);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const smallestElement = getSmallestElement(arr, i);
    [arr[i], arr[smallestElement]] = [arr[smallestElement], arr[i]];
  }
}

function getSmallestElement(arr, startIndex) {
  let currentSmallestIndex = startIndex;
  let currentSmallestElement = arr[startIndex];
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (arr[i] < currentSmallestElement) {
      currentSmallestIndex = i;
      currentSmallestElement = arr[i];
    }
  }

  return currentSmallestIndex;
}
