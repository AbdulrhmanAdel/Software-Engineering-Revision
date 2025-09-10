console.log(linearSearch([1, 2, 5, 6, 2, 8, 2, 62, 596], 5));

function linearSearch(arr, searchFor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchFor) {
      return i;
    }
  }

  return -1;
}
