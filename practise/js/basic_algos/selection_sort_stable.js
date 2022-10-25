// Stable selection sort
// Time complexity : O(n2)
// Auxiliary space : O(1)

// Select the min value from right subarray and
// insert it at the end of left subarray
function selectionSortStable(arr) {
  const n = arr.length;
  let i, j, minIndex, minValue;

  for (i = 0; i < n - 1; ++i) {
    minIndex = i;
    for (j = i + 1; j < n; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    minValue = arr[minIndex];
    while (minIndex > i) {
      arr[minIndex] = arr[minIndex - 1];
      --minIndex;
    }
    arr[i] = minValue;
  }
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
selectionSortStable(numbers);
console.log("After sorting : ", numbers);
