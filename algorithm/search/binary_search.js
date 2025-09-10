console.log(binarySearch([1, 5, 8, 10, 15, 60, 75, 100, 500], 3));

export function binarySearch(arr, searchFor) {
  return _binarySearch(arr, searchFor, 0, arr.length - 1);
}

export function _binarySearch(arr, searchFor, left, right) {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === searchFor) {
    return mid;
  }

  if (arr[mid] > searchFor) {
    return _binarySearch(arr, searchFor, left, mid - 1);
  } else {
    return _binarySearch(arr, searchFor, mid + 1, right);
  }
}
