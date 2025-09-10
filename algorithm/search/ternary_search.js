console.log(ternarySearch([1, 5, 8, 10, 15, 60, 75, 100, 500], 11));

function ternarySearch(arr, searchFor) {
  return _ternarySearch(arr, searchFor, 0, arr.length - 1);
}

function _ternarySearch(arr, searchFor, left, right) {
  if (left > right) {
    return -1;
  }

  const partitionPart = Math.floor((right - left) / 3);
  const mid1 = left + partitionPart;
  if (arr[mid1] === searchFor) {
    return mid1;
  }
  const mid2 = left + partitionPart;
  if (arr[mid2] === searchFor) {
    return mid2;
  }

  if (searchFor < arr[mid1]) {
    return _ternarySearch(arr, searchFor, left, mid1 - 1);
  } else if (searchFor > arr[mid2]) {
    return _ternarySearch(arr, searchFor, mid2 + 1, right);
  } else {
    return _ternarySearch(arr, searchFor, mid1 + 1, mid2 - 1);
  }
}
