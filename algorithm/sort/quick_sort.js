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

function quickSort(arr, start, end) {
  if (start >= end) return;
  const boundary = partition(arr, start, end);
  quickSort(arr, start, boundary - 1);
  quickSort(arr, boundary + 1, end);
}

function main() {
  const arr = [10, 7, 8, 9, 1, 5];
  console.log("Unsorted array:", arr);
  quickSort(arr, 0, arr.length - 1);
  console.log("Sorted array:", arr);
}

main();
