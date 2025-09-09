const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = insertionSort(arr);
console.log("Sorted array:", arr);

function insertionSort(arr) {
  let i = 1;
  while (i <= arr.length - 1) {
    moveItemToSortedLocation(arr, i, 0, i - 1);
    i++;
  }
}

function moveItemToSortedLocation(arr, index) {
  while (index > 0) {
    const prevIndex = index - 1;
    if (arr[index] < arr[prevIndex]) {
      [arr[index], arr[prevIndex]] = [arr[prevIndex], arr[index]];
      index--;
    } else {
      return;
    }
  }
}
