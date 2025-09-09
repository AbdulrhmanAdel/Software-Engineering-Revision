const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = bubbleSort(arr);
console.log("Sorted array:", arr);

function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }
  }

  return arr;
}
