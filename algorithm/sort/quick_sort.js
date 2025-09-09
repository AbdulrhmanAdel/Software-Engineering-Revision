const arr = [10, 7, 8, 9, 1, 5];
console.log("Unsorted array:", arr);
quickSort(arr);
console.log("Sorted array:", arr);

function _quickSort(arr, start, end) {
  if (start >= end) return;
  const boundary = partition(arr, start, end);
  _quickSort(arr, start, boundary - 1);
  _quickSort(arr, boundary + 1, end);
}

function partition(arr, start, end) {
  let boundary = start - 1;
  const pivot = arr[end];
  for (let i = start; i <= end; i++) {
    if (arr[i] <= pivot) {
      boundary++;
      [arr[boundary], arr[i]] = [arr[i], arr[boundary]];
    }
  }
  return boundary;
}

export function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
}
