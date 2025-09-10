import { _binarySearch } from "./binary_search.js";

// console.log(exponentialSearch([1, 5, 8, 10, 15, 60, 75, 100, 500, 600], 600));
console.log(exponentialSearch([1, 5, 8, 10, 15, 60, 75, 100, 500, 600], 1));
console.log(exponentialSearch([1, 5, 8, 10, 15, 60, 75, 100, 500, 600], 3));
console.log(exponentialSearch([1, 5, 8, 10, 15, 60, 75, 100, 500, 600], 4));
console.log(exponentialSearch([1, 5, 8, 10, 15, 60, 75, 100, 500, 600], 8));

function exponentialSearch(arr, searchFor) {
  let bound = 1;

  while (bound < arr.length && searchFor > arr[bound]) {
    bound *= 2;
  }

  return _binarySearch(
    arr,
    searchFor,
    bound / 2,
    Math.min(bound, arr.length - 1)
  );
}
