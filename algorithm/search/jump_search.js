console.log(jumpSearch([1, 5, 8, 10, 15, 60, 75, 100, 500], 5));
console.log(jumpSearch([1, 5, 8, 10, 15, 60, 75, 100, 500], 8));
console.log(jumpSearch([1, 5, 8, 10, 15, 60, 75, 100, 500], 13));
console.log(jumpSearch([1, 5, 8, 10, 15, 60, 75, 100, 500], 500));

function jumpSearch(arr, searchFor) {
  const blockSize = Math.floor(Math.sqrt(arr.length));
  let blockStart = 0;
  let blockEnd = blockSize - 1;
  while (blockStart < arr.length) {
    const result = searchBlock(arr, searchFor, blockStart, blockEnd);
    if (result != -1) {
      return result;
    }
    blockStart += blockSize;
    blockEnd += blockSize;
  }

  return -1;
}

function searchBlock(arr, searchFor, start, end) {
  if (end > arr.length - 1) {
    end = arr.length - 1;
  }

  for (let i = start; i <= end; i++) {
    if (arr[i] === searchFor) {
      return i;
    }
  }

  return -1;
}
