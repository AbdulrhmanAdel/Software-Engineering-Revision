const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = countingSort(arr);
console.log("Sorted array:", arr);

function countingSort(arr) {
  const occurrenceArray = buildOccurrenceArray(arr);
  let currentIndex = 0;
  occurrenceArray.forEach((occurrenceTimes, occurrenceValue) => {
    while (occurrenceTimes !== 0) {
      arr[currentIndex] = occurrenceValue;
      occurrenceTimes--;
      currentIndex++;
    }
  });
  return arr;
}

function buildOccurrenceArray(arr) {
  const occurrenceArray = [];
  for (let i = 0; i < arr.length; i++) {
    const currentIndex = arr[i];
    const currentOccurrence = occurrenceArray[currentIndex] ?? 0;
    occurrenceArray[currentIndex] = currentOccurrence + 1;
  }

  return occurrenceArray;
}
