import { quickSort } from "./quick_sort.js";

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = bucketSort(arr);
console.log("Sorted array:", sortedArr);

function bucketSort(arr) {
  const buckets = buildBuckets(arr);
  buckets.forEach((bucketArray) => {
    quickSort(bucketArray);
  });

  let currentIndex = 0;
  buckets.forEach((bucketArray) => {
    bucketArray.forEach((va) => {
      arr[currentIndex] = va;
      currentIndex++;
    });
  });
  return arr;
}

function buildBuckets(arr) {
  const buckets = [];
  const numberOfBuckets = 4;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const bucketIndex = Math.floor(item / numberOfBuckets);
    const bucketArray = buckets[bucketIndex] ?? [];
    bucketArray.push(item);
    buckets[bucketIndex] = bucketArray;
  }

  return buckets;
}
