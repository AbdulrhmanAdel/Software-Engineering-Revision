const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = sort(arr);
console.log("Sorted array:", arr);

function getMid(left, right) {
  return Math.floor((left + right) / 2);
}

function sort(arr) {
  mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, left, right) {
  if (left >= right) return;

  const mid = getMid(left, right);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  const sourceArr = arr.slice(left, right + 1);
  let sourceLeft = 0;
  let sourceRight = mid - left + 1;
  const sourceLeftEnd = sourceRight - 1;
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceRight >= sourceArr.length) {
      copyRangeToTarget(arr, left, sourceArr, sourceLeft, sourceLeftEnd);
      return;
    }

    if (sourceLeft > sourceLeftEnd) {
      copyRangeToTarget(arr, left, sourceArr, sourceRight);
      return;
    }

    const l = sourceArr[sourceLeft];
    const r = sourceArr[sourceRight];

    if (l <= r) {
      arr[left++] = l;
      sourceLeft++;
    } else {
      arr[left++] = r;
      sourceRight++;
    }
  }
}

function copyRangeToTarget(target, index, source, ...range) {
  const end = range.length > 1 ? range[1] : source.length - 1;
  for (let i = range[0]; i <= end; i++) {
    target[index++] = source[i];
  }
}
